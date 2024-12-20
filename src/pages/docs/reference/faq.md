---
layout: ../../../layouts/DocsLayout.astro
title: Frequently Asked Questions
---
# Frequently Asked Questions

### Table
- [Is palera1n safe?](#q-is-palera1n-safe)
- [Why do updates take so long?](#q-why-do-updates-take-so-longe)
- [Will palera1n ever support AMD? (or VMs?)](#q-will-palera1n-ever-support-amd-or-vms)
- [Why is there problems with USB-C cables and ports?](#q-why-is-there-problems-with-usb-c-cables-and-ports)
- [How do I use SSH?](#q-how-do-i-use-ssh)


## Q: Is palera1n safe?
Like all jailbreaks, each one of them is flawed in some way. We are NOT responsible for any data loss, or the result of a device being bricked. When using palera1n, the user should accept responsibility if anything happens to their device during the process.

## Q: Why do updates take so long?
We do our best to release a high quality product for use for the public, small hotfixes for previous builds of palera1n will be available if we find any issues. Bigger changes coming soon :D

## Q: Will palera1n ever support AMD? (or VMs?)
Due to the precision that `checkm8` needs in order to exploit the device, theres nothing we can do to attempt to fix the issue apart from telling you to either get an Intel machine, an AMD mobile computer, or an Apple Silicon Mac. Sorry.

The same applies for virtual machines, we cannot fix the issues that come from using any virtual machine software due to the exploit. So please, either use macOS or Linux on real hardware.

## Q: Why is there problems with USB-C cables and ports?
Due to Apple! They messed up on their USB-C cables and now there's issues when getting into DFU.

USB-C port on Apple Silicon Macs may require manual unplugging and replugging of the lightning cable after checkm8 exploit, though this problem may be solved by connecting via USB hub, though extensions can vary.

## Q: How do I use SSH?
Since palera1n has SSH by default via their dropbear port, you can use 
```
ssh root@127.0.0.1 -o "StrictHostKeyChecking=no" -o "UserKnownHostsFile=/dev/null" -o "ProxyCommand=inetcat 44"
```

Though, make sure you have `libimobiledevice` installed/and or downloaded.
