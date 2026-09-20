import React, { useEffect, useRef } from "react";
import { Gyroscope } from "expo-sensors";

export default function GyroscopeController({ onRotate }) {
  const onRotateRef = useRef(onRotate);

  useEffect(() => {
    onRotateRef.current = onRotate;
  }, [onRotate]);

  useEffect(() => {
    Gyroscope.setUpdateInterval(200);

    const subscription = Gyroscope.addListener((data) => {
      // Girar para a direita
      if (data.z < -2) {
        onRotateRef.current(1);
      }

      // Girar para a esquerda
      if (data.z > 2) {
        onRotateRef.current(-1);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return null;
}