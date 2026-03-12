interface KakaoAdProps {
  position: "left" | "right";
  adUnit: string;
}

export function KakaoAd({ position, adUnit }: KakaoAdProps) {
  const positionClasses = position === "left" 
    ? "left-0" 
    : "right-0";

  return (
    <div 
      className={`fixed ${positionClasses} top-1/2 -translate-y-1/2 w-[160px] h-[600px] flex items-start justify-center pt-4 z-50`}
    >
      <ins 
        className="kakao_ad_area"
        data-ad-unit={adUnit}
        data-ad-width="160"
        data-ad-height="600"
      />
    </div>
  );
}
