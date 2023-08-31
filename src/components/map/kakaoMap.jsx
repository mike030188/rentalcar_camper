import "./app.css";
import { useEffect } from "react";

function KakaoMap() {
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=4ef400ca395d8997a2216abdd59e712b"
    );
    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(36.3667, 127.35),
          level: 12,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const markerPositions = [
          new kakao.maps.LatLng(35.601, 126.9206),
          new kakao.maps.LatLng(37.5665, 126.978),
          new kakao.maps.LatLng(37.355, 126.8),
          new kakao.maps.LatLng(37.465, 126.878),
          new kakao.maps.LatLng(36.5665, 126.978),
          new kakao.maps.LatLng(37.5665, 127.978),
          new kakao.maps.LatLng(36.5665, 128.978),
          new kakao.maps.LatLng(34.4507, 126.57),
          new kakao.maps.LatLng(34.507, 127.57),
          new kakao.maps.LatLng(35.507, 128.57),
          new kakao.maps.LatLng(35, 128.57),
        ];

        markerPositions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <div id="map" className="map" />
    </div>
  );
}

export default KakaoMap;
