export default function TentacleGlow() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
      {/* Tentakel 1 */}
      <div className="absolute bottom-0 right-10 w-[280px] h-[500px] 
                      bg-gradient-to-b from-jamoko-gold/40 to-jamoko-teal/0 
                      blur-[140px] rotate-[25deg] opacity-30" />

      {/* Tentakel 2 */}
      <div className="absolute bottom-0 right-0 w-[240px] h-[420px] 
                      bg-gradient-to-b from-jamoko-gold/25 to-jamoko-teal/0
                      blur-[160px] rotate-[10deg] opacity-25" />

      {/* Tentakel 3 */}
      <div className="absolute bottom-0 right-20 w-[200px] h-[460px] 
                      bg-gradient-to-b from-jamoko-teal/30 to-transparent
                      blur-[180px] rotate-[35deg] opacity-20" />
    </div>
  );
}
