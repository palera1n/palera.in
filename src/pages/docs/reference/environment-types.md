---
layout: ../../../layouts/DocsLayout.astro
title: Environment Types
---

# Environment Types
The environment types that palera1n has available options for you to use.

## Rootless ( `-l` )
Rootless is the new jailbreak type for iOS/iPadOS 15 and higher.

### What is it?
This environment encapsulates the idea of not needing the root filesystem for jailbreak related content. Rather, stemming from the traditional jailbreak style that offers a lot more convenience such as reduced jailbreak detection and less risk to badly designed packages that may cause the device to not function as intended.

> Unfortunately developers need to recompile their existing packages to support this new format.

This is mainly due to the enforcement of SSV (Signed System Volume) with iOS/iPadOS 15, which heavily restricts what you're able to do with the root (`/`) filesystem. 

Rootless jailbreak files are typically stored in a writable directory being `/private/preboot/<hash>/<jailbreak>-<random-set-of-characters>`, which is essentially used to store files which is used before the device boots. Though, due to the path being randomized and (absurdly) long, theres a symlink to it being `/var/jb` which makes it easy to locate the current fakeroot you're using.

<p class="markdown-info">
Operating systems such as <strong>tvOS</strong> and <strong>iBridge</strong> are not subject to the SSV (Signed System Volume) enforcement that came with iOS/iPadOS 15 and above. It will be a similar experience to that to iOS 14 and below.
</p>

<p class="markdown-tip">
<strong>iOS 15, iPadOS 15, darwinOS 15, macOS 11</strong> and <strong>visionOS 1</strong> have enforced SSV at this current point in time.
</p>

## Rootful ( `-f` )
Rootful jailbreaks are those that modify the root filesystem. 

### What is it?
This is the traditional way of jailbreaking, where the root (`/`) filesystem mounted as read/write and jailbreak files are stored in it. 

People prefer this type of jailbreak as it has the most compatibility between already existing packages that have been around more than a few years, and has had an infrastructure that has been standard ever since the beginning of jailbreaking. **However**, ever since the introduction of iOS/iPadOS 15 this has all changed due to the enforcement of SSV (Signed System Volume).

Rootful on iOS/iPadOS 15 comes at a major cost that needs to be taken into consideration before using on these versions. Any true rootful jailbreaks (such as *legacy* palera1n) on these operating systems would result in a [tethered](/docs/reference/jailbreak-types#tethered) jailbreak. If you want a [semi-tethered](/docs/reference/jailbreak-types#semi-tethered) jailbreak it would require a substantial amount of storage used due to substituting the real filesystem with a copied one thats typically stored in another APFS partition.

> fakeFS (fake filesystem) is typically more safer than a traditional rootful jailbreak as most of what everything you do will be on that other partition, so deleting that will have no effect on your real system.

<p class="markdown-info">
Operating systems such as <strong>tvOS 15</strong> and <strong>iBridge</strong> are able to use the traditional jailbreak style similar to iOS/iPadOS/tvOS 14 without the need of having another APFS partition (or tethered), due to SSV (Signed System Volume) not being enforced on those platforms.
</p>

Another issue with rootful on iOS/iPadOS/tvOS 15+ is that packages not compiled with a newer Xcode version will need to be resigned due to changes introduced with those versions, making older packages often break and not be functional (however you **can** resign them, but its discouraged as using old packages can often have some undefined behaviors). Though most newer packages will not have this issue.