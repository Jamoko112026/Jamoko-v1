/**
 * Self-contained on purpose: also emitted inline by ProductPreview during SSR.
 * The viewer must work even while Next's development hydration is waiting.
 * Do not reference imports or module-level values from inside this function.
 */
export function installProductPreview(classes: Record<string, string>) {
  const host = window as Window & { __jamokoPreview333?: boolean };
  if (host.__jamokoPreview333) return;
  host.__jamokoPreview333 = true;
  let current: HTMLDialogElement | null = null;

  document.addEventListener("click", event => {
    const trigger = event.target instanceof Element ? event.target.closest<HTMLButtonElement>("button[data-jamoko-product-preview]") : null;
    if (!trigger || current) return;
    event.preventDefault();
    const source = trigger.dataset.previewSrc;
    if (!source) return;
    const label = trigger.dataset.previewLabel || "Produktvorschau";
    let naturalWidth = Number(trigger.dataset.previewWidth) || 1;
    let naturalHeight = Number(trigger.dataset.previewHeight) || 1;
    const root = document.createElement("dialog");
    current = root;
    root.className = classes.dialog;
    root.dataset.previewVersion = "3.3.3";
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", label);
    // Critical positioning remains explicit even if a stylesheet is delayed.
    Object.assign(root.style, { position: "fixed", margin: "0", padding: "0", border: "0", maxWidth: "none", maxHeight: "none", background: "#001821", color: "#f8f7f3", overflow: "hidden", zIndex: "1000" });
    const toolbar = document.createElement("div");
    toolbar.className = classes.toolbar;
    const title = document.createElement("p");
    title.textContent = label;
    const zoom = document.createElement("button");
    zoom.type = "button";
    zoom.className = classes.zoomButton;
    const hint = document.createElement("p");
    hint.className = classes.hint;
    hint.textContent = "Mit zwei Fingern zoomen oder doppeltippen. Zum Verschieben wischen.";
    toolbar.append(title, zoom, hint);
    const close = document.createElement("button");
    close.type = "button";
    close.className = classes.closeButton;
    close.setAttribute("aria-label", "Vorschau schließen");
    close.textContent = "×";
    const stage = document.createElement("div");
    stage.className = classes.imageArea;
    stage.tabIndex = 0;
    stage.setAttribute("role", "region");
    stage.setAttribute("aria-label", "Vergrößerte Produktvorschau");
    const canvas = document.createElement("div");
    canvas.className = classes.canvas;
    const image = document.createElement("img");
    image.src = source;
    image.alt = trigger.dataset.previewAlt || label;
    image.draggable = false;
    canvas.append(image);
    stage.append(canvas);
    root.append(toolbar, stage, close);
    document.body.append(root);

    const body = document.body;
    const savedStyle = { position: body.style.position, top: body.style.top, left: body.style.left, width: body.style.width, overflow: body.style.overflow };
    const savedX = window.scrollX, savedY = window.scrollY;
    const existingMeta = document.querySelector<HTMLMetaElement>('meta[name="viewport"]');
    const meta = existingMeta || document.createElement("meta");
    const savedViewport = meta.getAttribute("content");
    meta.name = "viewport";
    meta.content = (savedViewport || "width=device-width, initial-scale=1").replace(/,?\s*viewport-fit\s*=\s*[^,]+/gi, "") + ", viewport-fit=cover";
    if (!existingMeta) document.head.append(meta);
    Object.assign(body.style, { position: "fixed", top: `-${savedY}px`, left: `-${savedX}px`, width: "100%", overflow: "hidden" });
    try { root.showModal(); } catch { root.setAttribute("open", ""); }
    root.style.display = "flex";
    root.style.flexDirection = "column";

    type Point = { x: number; y: number };
    type View = Point & { scale: number };
    let view: View = { scale: 1, x: 0, y: 0 };
    let size = { width: 0, height: 0 };
    let base = { width: 0, height: 0 };
    let closed = false;
    let frame = 0;
    const pointers = new Map<number, Point>();
    let gesture: { points: Point[]; view: View; started: number; moved: boolean } | null = null;
    let lastTap: { point: Point; time: number } | null = null;
    const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);
    const middle = (a: Point, b: Point) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
    const relative = (point: Point) => {
      const rect = stage.getBoundingClientRect();
      return { x: point.x - rect.x - rect.width / 2, y: point.y - rect.y - rect.height / 2 };
    };
    function paint(next: View) {
      const scale = Math.min(5, Math.max(1, next.scale));
      const maxX = Math.max(0, (base.width * scale - size.width) / 2);
      const maxY = Math.max(0, (base.height * scale - size.height) / 2);
      view = { scale, x: Math.max(-maxX, Math.min(maxX, next.x)), y: Math.max(-maxY, Math.min(maxY, next.y)) };
      canvas.style.transform = `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`;
      zoom.textContent = scale > 1 ? "Ganzes Bild anzeigen" : "Bild vergrößern";
      zoom.setAttribute("aria-pressed", String(scale > 1));
    }
    function fit() {
      if (closed) return;
      size = { width: stage.clientWidth, height: stage.clientHeight };
      const factor = Math.min(size.width / naturalWidth, size.height / naturalHeight);
      base = { width: naturalWidth * factor, height: naturalHeight * factor };
      Object.assign(canvas.style, { width: `${base.width}px`, height: `${base.height}px`, marginLeft: `${-base.width / 2}px`, marginTop: `${-base.height / 2}px` });
      pointers.clear();
      gesture = null;
      lastTap = null;
      paint({ scale: 1, x: 0, y: 0 });
    }
    function viewport() {
      if (closed) return;
      const visual = window.visualViewport;
      Object.assign(root.style, { left: `${visual?.offsetLeft || 0}px`, top: `${visual?.offsetTop || 0}px`, width: `${visual?.width || window.innerWidth}px`, height: `${visual?.height || window.innerHeight}px` });
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    }
    function zoomAt(point: Point, scale: number) {
      const ratio = scale / view.scale;
      paint({ scale, x: point.x - (point.x - view.x) * ratio, y: point.y - (point.y - view.y) * ratio });
    }
    const observer = new ResizeObserver(fit);
    observer.observe(stage);
    const visual = window.visualViewport;
    window.addEventListener("resize", viewport);
    window.addEventListener("orientationchange", viewport);
    visual?.addEventListener("resize", viewport);
    visual?.addEventListener("scroll", viewport);
    image.addEventListener("load", () => { naturalWidth = image.naturalWidth || naturalWidth; naturalHeight = image.naturalHeight || naturalHeight; fit(); });
    function finish() {
      if (closed) return;
      closed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", viewport);
      window.removeEventListener("orientationchange", viewport);
      visual?.removeEventListener("resize", viewport);
      visual?.removeEventListener("scroll", viewport);
      document.removeEventListener("keydown", keyboard);
      window.removeEventListener("pagehide", finish);
      root.remove();
      current = null;
      if (existingMeta) {
        if (savedViewport === null) meta.removeAttribute("content");
        else meta.setAttribute("content", savedViewport);
      } else meta.remove();
      Object.assign(body.style, savedStyle);
      const scrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ left: savedX, top: savedY, behavior: "auto" });
      document.documentElement.style.scrollBehavior = scrollBehavior;
      trigger?.focus({ preventScroll: true });
    }
    function keyboard(event: KeyboardEvent) {
      if (event.key === "Escape") { event.preventDefault(); finish(); }
      if (event.key === "Tab") {
        const items = [close, zoom, stage];
        const index = items.indexOf(document.activeElement as HTMLButtonElement);
        event.preventDefault();
        items[(index + (event.shiftKey ? 2 : 1) + 3) % 3].focus();
      }
    }
    document.addEventListener("keydown", keyboard);
    window.addEventListener("pagehide", finish);
    close.addEventListener("click", finish);
    root.addEventListener("cancel", event => { event.preventDefault(); finish(); });
    root.addEventListener("close", finish);
    zoom.addEventListener("click", () => zoomAt({ x: 0, y: 0 }, view.scale > 1 ? 1 : 2.5));
    function begin() { gesture = { points: Array.from(pointers.values()), view: Object.assign({}, view), started: performance.now(), moved: false }; }
    stage.addEventListener("pointerdown", event => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      event.preventDefault();
      stage.setPointerCapture(event.pointerId);
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (pointers.size > 1) lastTap = null;
      begin();
    });
    stage.addEventListener("pointermove", event => {
      if (!pointers.has(event.pointerId) || !gesture) return;
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      const points = Array.from(pointers.values());
      const start = gesture;
      if (points.length >= 2 && start.points.length >= 2) {
        start.moved = true;
        const scale = Math.min(5, Math.max(1, start.view.scale * distance(points[0], points[1]) / Math.max(1, distance(start.points[0], start.points[1]))));
        const origin = relative(middle(start.points[0], start.points[1])), center = relative(middle(points[0], points[1]));
        paint({ scale, x: center.x - (origin.x - start.view.x) * scale / start.view.scale, y: center.y - (origin.y - start.view.y) * scale / start.view.scale });
      } else if (points.length === 1) {
        if (distance(points[0], start.points[0]) > 6) start.moved = true;
        paint({ scale: start.view.scale, x: start.view.x + points[0].x - start.points[0].x, y: start.view.y + points[0].y - start.points[0].y });
      }
    });
    function end(event: PointerEvent) {
      const now = performance.now(), point = { x: event.clientX, y: event.clientY };
      if (event.type === "pointerup" && pointers.size === 1 && gesture && !gesture.moved && now - gesture.started < 300) {
        if (lastTap && now - lastTap.time < 320 && distance(lastTap.point, point) < 30) { zoomAt(relative(point), view.scale > 1 ? 1 : 2.5); lastTap = null; }
        else lastTap = { point, time: now };
      } else lastTap = null;
      pointers.delete(event.pointerId);
      if (pointers.size) { begin(); if (gesture) gesture.moved = true; }
      else gesture = null;
    }
    stage.addEventListener("pointerup", end);
    stage.addEventListener("pointercancel", end);
    stage.addEventListener("keydown", event => {
      const moves: Record<string, Point> = { ArrowLeft: { x: 40, y: 0 }, ArrowRight: { x: -40, y: 0 }, ArrowUp: { x: 0, y: 40 }, ArrowDown: { x: 0, y: -40 } };
      if (moves[event.key]) paint({ scale: view.scale, x: view.x + moves[event.key].x, y: view.y + moves[event.key].y });
      else if (event.key === "+" || event.key === "=") zoomAt({ x: 0, y: 0 }, Math.min(5, view.scale + .5));
      else if (event.key === "-") zoomAt({ x: 0, y: 0 }, Math.max(1, view.scale - .5));
      else if (event.key === "Home" || event.key === "0") paint({ scale: 1, x: 0, y: 0 });
      else return;
      event.preventDefault();
    });
    viewport();
    fit();
    close.focus({ preventScroll: true });
  }, true);
}
