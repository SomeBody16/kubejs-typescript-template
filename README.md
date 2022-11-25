# KubeJS Typescript Template

## File structure

```
/
    kubejs/ - your normal kubejs file structure, but in typescript!
    minecraft/
        kubejs/ - output in javascript
```

## assets, config, data

Currently this folders need to be managed manually

As I didn't found webpack plugin which would work properly with this
(but I didn't look too much)

## Building

```
npm run kubejs:build
npm run kubejs:build:watch
```

watch will **watch** for changes in realtime 😲

## Trick

I'm using it by installing minecraft server to `/minecraft`
So whenever I change my typescript file I can instantly type `/kubejs reload server_script` (or any other reload)
on server and test changes.

## TO DO:

-   [ ] Support for `assets`, `config` and `data` folders
-   [ ] Update typescript types with ProbeJS
