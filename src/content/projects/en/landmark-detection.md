---
title: Recognizing places with a phone camera
kicker: Master's thesis · Computer Vision
summary: A PyTorch pipeline that recognizes tourist landmarks in real time by matching the camera image against a database of descriptors. Exported to ONNX, with a sample Android app.
order: 4
size: small
role: Design and development (Master's in AI, VIU)
period: 2025
stack: [PyTorch, Image retrieval, ONNX, Android, Augmented reality]
link: { href: 'https://github.com/theviderlab/landmark-detection-with-retrieval', label: 'GitHub repository' }
shots:
  - { src: landmark-detection/cover, label: 'Model pipeline: detection, descriptors and similarity search' }
---

## The idea

Point your phone at a building or monument and instantly know what it is, without relying on precise GPS or on the place being tagged.

## How it works

- **Detection and descriptor extraction** from the camera image with PyTorch models.
- **Retrieval** against a database of known-place descriptors to find the closest match.
- **ONNX export** to run the model on the device.
- **Sample Android app** that shows the result with augmented-reality anchors.
