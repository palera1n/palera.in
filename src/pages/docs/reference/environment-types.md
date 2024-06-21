---
layout: ../../../layouts/DocsLayout.astro
title: Environment Types
---

# Environment Types

## Rootless

Since the introduction of SSV (Signed System Volume) with iOS 15, jailbreaks have begun to move away from storing files directly on the root filesystem. Since the root filesystem is no longer modified, this is called "rootless". Jailbreak files are now typically stored at /var/jb (which is a symlink to whereever it might be).

## Rootful

Rootful jailbreaks are those that modify the root filesystem. This is the traditional way of jailbreaking, where the root filesystem mounted as read/write and jailbreak files are stored there. However, since iOS 15, any true rootful jailbreaks (such as legacy palera1n) would result in a tethered jailbreak, so the only other method as of right now would be to create a fake root filesystem and mount it instead, but this takes up unnecessary space.