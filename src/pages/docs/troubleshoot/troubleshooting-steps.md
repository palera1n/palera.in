---
layout: ../../../layouts/DocsLayout.astro
title: Troubleshooting Steps
---

# General Troubleshooting

This section is for when you're having problems jailbreaking with palera1n, this extends to pre-jailbreak and post-jailbreak, and covers situations where you may be stuck booting.

### Pre-jailbreak
- [iPhone X on iOS 15.0 - 15.1](#iphone-x-on-ios-150---151)
- [Could not connect to lockdownd](#could-not-connect-to-lockdownd)
- [Device boots out of DFU](#device-boots-out-of-dfu)
- [palen1x boots into grub rescue shell](#palen1x-boots-into-grub-rescue-shell)

### During-jailbreak
- [Timed out waiting for download mode](#timed-out-waiting-for-download-mode)
- [Booting is stuck on pongoOS](#booting-is-stuck-on-pongoos)
- [jbinit DIED!](#jbinit-died)
- [Device boots un-jailbroken](#device-boots-un-jailbroken)
- [No such file or directory errors on device](#no-such-file-or-directory-errors-on-device)
- [Watchdog timeout](#watchdog-timeout)
- [Stuck on "waiting for roots…"](#stuck-on-waiting-for-roots)

### Post-jailbreak
- [Libhooker wants to install](#libhooker-wants-to-install)
- [Force reverting still keeps app icons](#force-reverting-still-keeps-app-icons)
- [Cannot download apps from App Store](#cannot-download-apps-from-app-store)
- [Root login on rootless](#root-login-on-rootless)
- [Force Reverting boots jailbroken](#force-reverting-boots-jailbroken)
- [MaxLoopCount reached in SmartUnPack (2) for libiosexec1](#maxloopcount-reached-in-smartunpack-2-for-libiosexec1)
- [Fixing Files app on (partial) FakeFS](#fixing-files-app-on-partial-fakefs)
- [Jailbreak dies after restart](#jailbreak-dies-after-restart)
- [Loader application not appearing](#loader-application-not-appearing)


## jbinit DIED!

The exact cause depends on the preceding error messages, but the most common cause is trying to use the create fakefs/bindfs (`-c`/`-B`) options when rejailbreaking. 

You need to remove those options if it's not your first time jailbreaking since last restoring rootfs.

## Libhooker wants to install
Remove the Chimera and Odyssey repo **immediately**.

These repos are not meant to be used with palera1n and are able to break your jailbreak if you install anything from them.

## Force reverting still keeps app icons
Theres an issue with Rootful where uicaching doesn't properly clear icon cache. This is not exactly a big issue and serves no harm to the user or device.

## Device boots out of DFU
Make sure to use a **USB-A to lightning** cable.

There is a common occurrence of people using **USB-C** cables when trying to jailbreak, it is not recommended to use these cables as there can be issues when trying to enter **DFU**, as stated from the [Compatibility Chart](/docs/reference/compatibility-chart#lightning-cables). 

There are numerous cases of USB-C cables working regardless of the potential issues but its a very uncommon occurrence.

## Device boots un-jailbroken
### A11 Problems
This usually happens due to having a passcode set on A11 devices when jailbreaking (or having previously set a passcode on iOS 16, even if it's currently turned off).

If you are on iOS 15, turn off your passcode and try jailbreaking again.

If you are on iOS 16, turn off your passcode, backup your device, erase from settings or restore from iTunes/Finder, and then restore the backup. Then try jailbreaking again.

### Tweak Problems
Its also a very common-occurrence that bad tweaks can potentially cause problems jailbreaking, if you've jailbroken before and it suddenly stops jailbreaking this may be the case.

You can boot into palera1n's build-in safemode feature by running the following command:

**Rootless:**
```sh
palera1n -l -s
```

**Rootful:**
```sh
palera1n -f -s
```

This will disable tweak injection and let you troubleshoot what could be causing your device not to boot jailbroken properly.

Once you've located the culprit, uninstall it with your package manager and reboot. Then, use palera1n normally without the safemode argument.

## Cannot download apps from App Store
### Method 1
Install the Choicy tweak and disable tweak injection into the App Store.

### Method 2
If you're not able to install applications via any means necessary after using palera1n, it is recommended to Download NewTerm 3, open it and run:

```bash
sudo su
```
It will ask for a password, type in the terminal password that you set when you jailbroke

Then run these lines one by one:
```bash
chown root:wheel /var/tmp/
chown mobile:wheel /var/tmp/com.apple.appstored/
chmod 777 /var/tmp
chmod 700 /var/tmp/com.apple.appstored/ 
killall -9 appstored
```

### Method 3
Restore the device via iTunes or Finder.

## RocketBootstrap not working (apps crashing, respring loops)
The original version of RocketBootstrap does not work on iOS 15 and above, and may cause apps to crash or even respring loops, especially if installed together with Cephei. Please install RocketBootstrap from the palera1n repo instead. (Note that currently this only works on rootful.)

## palen1x boots into grub rescue shell
If you are using **Rufus** instead of **Balena Etcher**, you need to flash palen1x in *DD mode*, **not** ISO mode.

## Booting is stuck on pongoOS
If stuck at "Booting pongoOS" or "Found Pongo USB mode device", `Ctrl+C`, type exit, then retry, don't reboot the device. It happens on A9X and older devices.

**Make sure you created FakeFS before jailbreaking with rootful, or else you'll also be stuck on the pongoOS screen.**

## No such file or directory errors on device
If you get a bunch of "No such file or directory" errors on a verbose screen on your device while jailbreaking with palera1n, it means you don't have enough storage left on your device. FakeFS requires about 10 GB free. Restore rootFS and free up some space or try using a (partial) FakeFS instead, which only uses about 3 GB.

You can find out how by using the help command:
```sh
palera1n --help
```

## Hash for Packages.zst invalid
This is an issue with the repo you're using, and there's nothing you can do as a user to fix it (other than using a different package manager such as Zebra).

It may be caused by Cloudflare's cache, in which case wait up to 4 hours and try again, or ask the repo maintainer to clear the cache.

## Watchdog timeout
If you're getting a panic with this message when trying to rejailbreak, it's usually caused by a bad tweak. Try booting in safe mode, remove the tweak(s) you think may be causing the issue from Sileo (usually it will be a recently installed/updated one).

Sometimes this also happens without any misbehaving tweaks installed. We're not exactly sure why this happens, it may be caused by Substitute. Usually booting in safe mode and then pressing "Do All" works in such cases too, but note that this may prevent some tweaks that inject into daemons from working correctly until the daemons are restarted. You can also try using rootless instead—while tweak support is currently limited, ElleKit is more modern and stable than Substitute.

## Root login on rootless
On rootless, login as `root` user is disabled by default. You can log in as `mobil`e instead and use sudo.

If you want to enable root user login, first make sure to upgrade all packages in Sileo to ensure your bootstrap is up to date, and then do `sudo passwd root`.

## Force Reverting boots jailbroken
Reboot your device.

## MaxLoopCount reached in SmartUnPack (2) for libiosexec1
If you get this error, update libiosexec1 first, then you should be able to update the rest of the packages.

## Fixing Files app on (partial) FakeFS
1. Install TrollStore

2. Boot rootless (no need to install from the loader)

3. Open TrollStore

4. Settings → Rebuild Icon Cache

This should usually fix issues with the Files app. After that, you can rejailbreak in rootful mode.

You may have to repeat these steps again if you rebuild icon cache in TrollStore on rootful.

## Stuck on "waiting for roots..."
Try rebooting the device and jailbreaking again. If that doesn't work, restore rootfs and try again.

## Timed out waiting for download mode
### If the device is stuck on the Apple logo or black screen
Unplug and replug the device. This usually solves the issue.

If it doesn't work, reboot and rejailbreak, and unplug/replug as soon as the Apple logo appears after "DFU mode device disconnected".

### If the device booted up to normal mode
Try jailbreaking again and make sure you enter DFU correctly. Entering DFU straight from normal mode is known to cause issues, at least on A11 devices. You should enter recovery mode first and let palera1n guide you to enter DFU.

### If the device booted up to normal mode
- Make sure you restored rootfs with palera1n.sh if you used tethered before as palera1n-c does not support creating or booting a tethered setup.

- Try exiting recovery mode using palera1n -n.

- If it's still recovery looping and you can't exit, your SSV seal is most likely broken. Use the apfs-reseal script to fix it. (This script currently only works fully automatically on macOS).

- As a last resort, try updating in iTunes/Finder, and if that doesn't fix it, restore.

### Other things to check
- Use a USB-A cable, not USB-C (if you have an Apple Silicon Mac, you may need a USB hub rather than a single-cable adapter).

- Use a computer with an Intel or Apple Silicon CPU, as AMD has issues.

## Could not connect to lockdownd
### Mux error (-8)
Unplug and replug your device.

### Password protected (-17)
Unlock your device and try again.
Alternatively, enter recovery mode manually before jailbreaking.

### Pairing dialog response pending (-19)
Accept the prompt to trust the computer on your device.
Alternatively, enter recovery mode manually before jailbreaking.

### Invalid HostID (-21)
Run `idevicepair pair` (use sudo on Linux)
Accept the prompt to trust the computer on your device if needed

Run `idevicepair pair` again (use sudo on Linux)
Alternatively, enter recovery mode manually before jailbreaking.

## iPhone X on iOS 15.0 - 15.1
Sadly due to an issue with checkra1n there is a problem with the iPhone X booting jailbroken on these specific versions. Though, it's not a huge problem as there's already alternative jailbreaks you can use.

Get the [Dopamine](https://ellekit.space/dopamine/) jailbreak and jailbreak with that instead of using palera1n.

## Jailbreak dies after restart
It's a feature, not a bug.

## Loader application not appearing

<tab-container>
    <input type="radio" id="tabToggle01" name="tabs" value="1" checked />
    <label for="tabToggle01" checked="checked">macOS</label>
    <input type="radio" id="tabToggle02" name="tabs" value="2" />
    <label for="tabToggle02">Linux</label>
    <tab-content>
<MarkdownRenderer class="docs-stuff">

**Get libimobiledevice:**
```sh
brew install libimobiledevice
```

If you're jailbroken you should be able to run this and get into the device
```sh
ssh root@127.0.0.1 -o "StrictHostKeyChecking=no" -o "UserKnownHostsFile=/dev/null" -o "ProxyCommand=libimobiledevice/inetcat 44"
```

</MarkdownRenderer>
    </tab-content>
    <tab-content>
<MarkdownRenderer class="docs-stuff">

**Get libimobiledevice:**
```sh
# Downloads libimobiledevice
curl -LO https://static.palera.in/tools/libimobiledevice-static-linux.tar.zst
# Extracts the package
mkdir libimobiledevice && tar --use-compress-program=unzstd -xvf Downloads/libimobiledevice-static-linux.tar.zst -C libimobiledevice/
```

If you're jailbroken you should be able to run this and get into the device
```sh
ssh root@127.0.0.1 -o "StrictHostKeyChecking=no" -o "UserKnownHostsFile=/dev/null" -o "ProxyCommand=inetcat 44"
```

</MarkdownRenderer>
    </tab-content>
</tab-container>

> Password: `alpine`
>
> Also, depending on your host computer settings this may not work and it may require you to put your ssh key into `/var/root/.ssh/authorized_keys`

After getting into the phone you should be able to run this
```sh
uicache -fp /cores/binpack/Applications/palera1nLoader.app
```

Though if not, its recommended reviewing any panic logs if possible from `Settings > Privacy > Analytics & Improvements > Analytics Data` and refer to the issues here according to those.
