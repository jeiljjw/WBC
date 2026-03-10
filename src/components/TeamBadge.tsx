import { COUNTRY_INFO } from "@/data/mockData";

export function TeamBadge({ name, className = "" }: { name: string, className?: string }) {
  const info = COUNTRY_INFO[name];
  if (!info) return <span className={className}>{name}</span>;
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={`https://flagcdn.com/${info.code}.svg`} 
        alt={`${name} flag`}
        className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm"
        referrerPolicy="no-referrer"
      />
      <span className="font-semibold tracking-wide">{info.abbr}</span>
    </div>
  );
}
