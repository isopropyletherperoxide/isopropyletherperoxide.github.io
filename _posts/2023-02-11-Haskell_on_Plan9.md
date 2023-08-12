--- 
title: Running Haskell on Plan9
author: meee :3 
image: /assets/images/plan9_haskell.png 
layout: post 
subtitle: "Fighting through bad documentation and running Haskell on Plan9"
twittercard: summary_large_image

---

**Disclaimer: I have not done the bulk of the work porting HUGS to Plan9, this blogpost is only about building and running it (as I found the process oddly non-trivial)**

As I have nothing useful or more interesting to do, I've spent the last week exploring and playing around with Plan9 (mostly 9front).

This article details on how I managed to fight through the ancient documentation and to actually run Haskell on my install.

### Setup:
I'm running 9front and 9legacy through QEMU/KVM with the help of ``virt-manager``, with the VMs on mostly default settings with the exception of the display running through virtio instead of the default protocol. In this article I'm using 9front, but it works for 9legacy about the same.

I don't recommend using VirtualBox as it tends to break with updates.  

### Fetching the files and building 
First, we need to get a source tarball with HUGS from [contrib](https://9p.io/wiki/plan9/Contrib/) and extract it:

```bash 
9fs sources 
cp /n/sources/contrib/andrey/hugs.tgz /usr/glenda/
tar -xvf hugs.tgz
```

Then, we ``cd`` into ``/usr/glenda/hugs-9p/src/`` and enter a POSIX shell emulator through ``ape/psh`` (**NOT** ``ape/sh``):

```bash
cd hugs-p9/src/
ape/psh 
```

Now, as we're in the POSIX shell, we run ``make`` and actually build our interpreter: 

```
make && make install
```

After the build is done, exit the POSIX shell and go back to our "home" folder.

```bash
exit 
cd 
```

Now your interpreter is ready! You can run it with ``hugs``.

<img src="/assets/images/hugs_plan9.png" width="800">

If you chose not to do ``make install`` for some reason, you'll also need to declare ``HUGSDIR`` before running your ``hugs`` binary and set it to your sourcecode root dir:  

```bash
HUGSDIR = /usr/glenda/hugs-9p
hugs-9p/src/hugs 
```

Now you're in! Have fun Hasking on your Plan9 system.

<img src="/assets/images/plan9_haskell.png">
