import imgBoreum from "../../imports/pets/boreum.jpg";
import imgBori from "../../imports/pets/bori.jpg";

export function PetDuoAvatar({ size = 44 }: { size?: number }) {
  const avatarSize = Math.round(size * 0.72);

  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0,
      }}
      title="보름이(러시안블루) &amp; 보리(말티푸)"
    >
      {/* 1. Back/Left: 보름이 (Russian Blue Cat) */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: `${avatarSize}px`,
          height: `${avatarSize}px`,
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid #FFFFFF",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          backgroundColor: "#475569",
          zIndex: 1,
        }}
      >
        <img
          src={imgBoreum}
          alt="보름이 (러시안블루)"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* 2. Front/Right: 보리 (Brown Maltipoo Dog) */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: `${avatarSize}px`,
          height: `${avatarSize}px`,
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid #FFFFFF",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          backgroundColor: "#B45309",
          zIndex: 2,
        }}
      >
        <img
          src={imgBori}
          alt="보리 (말티푸)"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
