import { useEffect } from "react";

interface KakaoAdProps {
  position: "left" | "right";
  adUnit: string;
}

export function KakaoAd({ position, adUnit }: KakaoAdProps) {
  useEffect(() => {
    const container = document.getElementById(`kakao-ad-${position}`);
    if (!container) return;
    
    // 만약 이미 DOM 안에 <ins> 광고 태그가 들어 있다면 중복 실행을 막습니다. (F5 새로고침 및 Strict Mode 대비)
    if (container.querySelector("ins")) return;

    // 컨테이너 초기화
    container.innerHTML = "";

    const ins = document.createElement("ins");
    ins.className = "kakao_ad_area";
    ins.style.display = "none";
    ins.setAttribute("data-ad-unit", adUnit);
    ins.setAttribute("data-ad-width", "160");
    ins.setAttribute("data-ad-height", "600");

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    script.async = true;

    container.appendChild(ins);
    container.appendChild(script);
  }, [position, adUnit]);

  const positionClasses = position === "left" 
    ? "left-0" 
    : "right-0 min-w-[160px]"; // Make sure right side has width to not squish

  return (
    <div 
      id={`kakao-ad-${position}`}
      className={`fixed ${positionClasses} top-1/2 -translate-y-1/2 w-[160px] h-[600px] flex items-start justify-center z-[9999]`}
    >
    </div>
  );
}
