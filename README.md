![screenshot](https://user-images.githubusercontent.com/3526922/50376760-2ddac200-0612-11e9-8666-338065d83b43.png)

# brew-cleaner
Sample react application for [node-webrender](https://github.com/cztomsik/node-webrender) so that you can see what's supported and how to setup your environment if you want to play with this too.

## Notes
- it is currently calling `execSync()` so the pause you experience is actually ruby runtime so maybe your first excercise might to make it async and add loading state :-)
- scrolling is choppy but it's actually not a performance issue, there's currently no threading so event-loop has to be polled for events (every 1/30 of a second)
- the library is far from being useful but it's [getting better every day](https://github.com/cztomsik/node-webrender/issues)

## Development
To start an application with HMR enabled
```
git clone https://github.com/cztomsik/brew-cleaner
cd brew-cleaner
npm i
npm run dev
```

You can then do changes to the code and it should refresh instantly (or with just little pause). Some errors are tolerated but some might just crash so maybe you can use nodemon or something if that is an issue for you.

You can start react-devtools with `react-devtools` if you have them installed globally.

You can also start application without HMR but it's not that much fun.
```
npm start
```

## TODO
Show how to ship native app.
