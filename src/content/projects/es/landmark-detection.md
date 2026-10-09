---
title: Reconocer lugares con la cámara del móvil
kicker: Trabajo fin de máster · Computer Vision
summary: Un pipeline en PyTorch que reconoce lugares de interés turístico en tiempo real comparando la imagen con una base de descriptores. Exportado a ONNX, con una app de ejemplo para Android.
order: 4
size: small
role: Diseño y desarrollo (Máster en IA, VIU)
period: 2025
stack: [PyTorch, Image retrieval, ONNX, Android, Realidad aumentada]
link: { href: 'https://github.com/theviderlab/landmark-detection-with-retrieval', label: 'Repositorio en GitHub' }
shots:
  - { src: landmark-detection/cover, label: 'Reconocimiento en la app Android' }
---

## La idea

Apuntar con el móvil a un edificio o monumento y saber al instante qué es, sin depender de un GPS preciso ni de que el lugar esté etiquetado.

## Cómo funciona

- **Detección y extracción de descriptores** de la imagen de la cámara con modelos en PyTorch.
- **Recuperación (retrieval)** contra una base de descriptores de lugares conocidos para identificar el más parecido.
- **Exportación a ONNX** para ejecutar el modelo en el dispositivo.
- **App de ejemplo para Android** que muestra el resultado con anclas de realidad aumentada.
