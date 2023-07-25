[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project: The Death Square

![](https://media.giphy.com/media/1xo9COytfPE9chS05b/giphy.gif)

Those pesky rebels destroyed yet another one of our death stars! But we'll build an even better one and crush them once and for all. This time, our death star will be a death square.

**Complete each part in order before moving to the next one.**

[A solution for reference](https://git.generalassemb.ly/java-interapt-3-13-2023/ED-Angular.git)

## Bonus

KEEP STYLING!!!

## Part 1: Create App

1) Generate a new `ng` app called `imperial-starfleet`.

2) Create a component called `death-square`. This component should be a square with a gray background. Add one instance of this component to our root component.

![](https://i.imgur.com/cKtFku6.png)

---

## Part 2: Add Components

1) Create a component called `turret`. This component consists of an `<img>` tag with [turret.png](images/turret.png) as its source. Place as many instances of this component inside the `death-square` component HTML as you think are necessary to beat the rebels.

>**Note:** All Angular assets are served up from the `src/assets` folder. Point the turret's `src` attribute at this folder (e.g., `/assets/...`). Can create a new `images` folder under `/assets`.

2) Now that our death square is protected, let's create a component called `laser-cannon`. One instance of this component should also be placed and centered in our `death-square` component. It should be a square with a red background.

<details>
	<summary>Still struggling with the CSS? Check out these hints if needed.</summary>

		`death-square.component.css`

		.container {
		  background-color: grey;
		  width: 1100px;
		  height: 1100px;
		  position: relative;
		}

		.laser-cannon {
		  position: absolute;
		  left: 50%;
		  top: 50%;
		  width: 50px;
		  height: 50px;
		  margin-left: -25px;
		  margin-top: -25px;
		}

		`laser-cannon.component.css`

		.container {
		  background-color: red;
		  width: 100px;
		  height: 100px;
		  position: absolute;
		  left: 45%;
		  top: 45%;
		}

</details>

>**Note:** If you use the hints above, you will still need to make the corresponding changes to your HTML classes.

3) Our death square is complete, but we would still be vulnerable if the rebel fleet attacked. Let's create a new component called `tie-fighter`. Include [tie-fighter.png](images/tie-fighter.png) in its template, and add as many instances as you think are necessary to protect our death square. Do NOT nest these in the `death-square` component.

![](https://i.imgur.com/gSY2gfu.png)

---

## Part 3: Create Modules

1) This death square will surely not be destroyed now, but we still want to wrap up our code so future engineers can easily build another one. Move the `turret`, `death-square`, and `laser-cannon` into an `internal-defenses` directory, and create a feature module for `internal-defenses`.

2) Our tie fighters will be exposed if the rebels attack with larger cruisers. Create a `star-destroyer` component, add it to our app (NOT nested in the `death-square` component), and then package it and our `tie-fighter` component into a feature module called `external-defenses`.

![](https://i.imgur.com/i3V9FNd.png)

---


## Part 4: Use Directives

1) Instead of manually duplicating our instances of `turret` and `tie-fighter` components use `ngFor` to put as many instances of these components as you want. Be sure to set the number in the component.

2) If attacked we will activate code red in the `tie-fighter` by changing their background to red on a mouse hover. Create a custom directive to do that.

---

## Part 5: Include Routing 

Those pesky rebels are planning yet another attack on our death square. Like any good business, we need to prepare by running an inventory on our equipment. Then we can be sure of our impending victory.


1) Open up the `imperial-starfleet` directory in the terminal and start up the app. If you're not sure how to do this, take a look at previous lessons for help.

2) Look familiar? This is our "death square," which we'll use to bring doom to the Rebel Alliance. However, we at the Empire demand a little more detail. Try clicking on one of the turrets. Nothing happened, right? Let's fix that.

3) Create a new component called `info-window` so we can see some information about our turrets.

4) Create an `app-routing.module.ts` file (just like in the previous lesson) that imports the `InfoWindowComponent` and defines one route with the path `info` pointing to the `InfoWindowComponent`. Import this routing module in `app.module.ts`.

5) Add a `router-outlet` to `app.component.html`.

6) Test your new route by going to `/info` in your browser.

7) That's great, but we need to be able to click a turret and quickly get all its information. Wrap the `img` tag in `turret.component.html` in an `a` tag with a `routerLink` like the one we used in the previous lesson.

8) Now, import `RouterModule` in the `internal.defenses.module.ts` file.

9) Finally, change the `info-window` component's HTML to say `Turret is functional`.

It's not the most detailed inventory, but it's definitely better than what the rebels have.  

---

## Part 6: Build API

The rebel attack has begun. At the moment, all of our turrets are still operational, but some may have been damaged. We need to know which ones need to be repaired. Luckily, this information is available in our data banks; we just need to bring it to our dashboard to quickly deploy repair droids.


1) Go to `https://impreial-starfleet.onrender.com/api/turrets/4` to see how much damage our fourth turret has incurred. We have 16, so see how much damage the other ones have as well.

2) Navigate into `imperial-starfleet` and start up our front end.

3) Import HTTP into the `InfoWindowComponent`, like we did in the previous lesson.

4) Put `http` into the constructor of `InfoWindowComponent`.

5) Create a `findTurret()` function that passes in a `turretNumber` that looks similar to our `findWeather()` function from the previous lesson. Make your `get` request to the same URL we used in Step 2.

5a) Save your JSON results from the `findTurret()` function in a variable called `dataBanks` (Note: **Not** `results` like the `findWeather()` function). Make sure you first declare `dataBanks` at the top of your `InfoWindowComponent` class.

>**Note:** You want to `console.log()` the `response` value before you save it to `dataBanks`. It does **NOT** have the same format as the Star Wars API response.

6) Call the function inside the `ngOnInit` function with a hard-coded value of `4`, for now.

7) Change the `info-window.html` template to an unordered list with two list items: one with a double-bracket reference to `dataBanks.turretNumber` and one with a reference to `dataBanks.damage`.

8) Test the work you've done so far in the browser.

9) In `death-square.component.html`, give each turret a `turretNumber` like so: `[turretNumber]="1"`. [Note: once you get this working you can perhaps refactor an use the `index` avilable in your `*ngFor`loop.](https://angular.io/api/common/NgForOf) 

10) Import the `Input` module from Angular core in `turret.component.ts`.

11) Take this value into the `turret.component.ts` `TurretComponent` class like so: `@Input('turretNumber') turretNumber!: number;`.

12)  Add the `turretNumber` variable in double curly braces to your `turret.component.html` template's `RouterLink`.

13) Add a `/:id` to the `info` path in `app-routing.module.ts`.

14) Now, we need to handle this new `turretNumber` in the` InfoWindowComponent`. Import `ActivatedRoute` and include it in your `constructor`, like we did in the URL Params lesson.

15) Add a `this.route.paramMap.subscribe()` function to the `ngOnInit()` and tuck the `this.findTurret()` function inside it, similar to the URL Params lesson. Don't forget to switch out the hard-coded `4` for the `param.id` coming from your route params.

16)Import the `HttpClientModule` to your `app.module.ts` and add it to your `imports`

17)  Now, let's test it in the browser. Click on the top-left turret. Two damage? Not too bad. Click on the bottom-right turret. Nine damage? Let's get that repair droid on its way.  

### Bonus

If you look in Dev Tools, you **may** notice it complaining about `dataBanks` not being defined until we get the result back from our API. You can fix this with a well-placed [`*ngIf`](https://angular.io/guide/cheatsheet)\*.

---

## Part 7: Test It

**Attempt only if completed the [testing lesson](../testing/testing-in-angular.md)**

In The Galactic Empire, workplace safety and [a host of other issues](https://twitter.com/DeathStarPR) are very important to us. One thing we take seriously is testing.

The rebels have boarded our death square and are heading for our data banks. A platoon of storm troopers has been sent to stop them, but we need to know the second they go offline so we can switch to a backup. Let's do some test-driven development.

1) Navigate into `imperial-starfleet` and start up our front end.

2) Please comment out your `hover.directive.spec.ts` file. You can research more about Directive testing as a bonus if you wish.

3) Run `ng test` inside `imperial-starfleet`. Nice - we're passing three tests! But there's nine failing tests. Let's make them pass.

4) First start by getting rid of the test inside `app.component.spect.ts` that's labeled `it('should render a title')` since we are no longer rendering a `{{title}}` in the `app.component.html`. This will reduce your tests tot eight instead of nine.

5) Still inside of the `app.component.spect.ts` you'll want to add `InternalDefensesModule` and `ExternalDefensesModule` to your `imports` inside of the `beforeEach` method. This ensures that the components exists when running your tests.

6) Since the `death-square` component is also rendering the the laser and turret inside of it's html, inside of the `death-square.component.spec.ts` make sure to add `LaserCannonComponent` and `TurretComponent` to the `declarations` inside of the `beforeEach` method.

7) Since `death-square` is also a part of the routes system we have in place, create an `imports` array inside of the `forEach` method and include the `RouterTestingModule`.

8) Looks like we're also getting a `routerLink` error for the `turret` component. What should we add to the imports array of the `turrent.component.spec.ts`? 

9) Take a look at the failing test complaining that there is `No provider for Http`. What `Module` could we import to `info-window.component.spec.ts`? Hint: It's toward the top of `app.module.ts`. Don't forget to add it to an `imports` array below the `declarations` array in `TestBed.configureTestingModule`. Save the file and check the `ng test` browser output.

10) Again, since the `info-window` is also a part of the routing system, include the `RouterTestingModule` in the `imports` array of the `info-window.component.spec.ts` file.

11) We still have a failing test that claims `turretNumber` is undefined. We get this error because it's not receiving data from the API during testing. We can fix this by using the safe navigation operator `?` in our `info-window.component.html` like so:

```html
  <li>Turret Number: {{dataBanks?.turretNumber}}</li>
  <li>Damage: {{dataBanks?.damage}}</li>
```

12) Create a new test below the "should create" one and call it "should have a `findTurret()` function to get data from the data banks." Fail this test the old-fashioned way by making it test `expect(true).toEqual(false);`.

13) Now, let's actually test something. We're going to make a lot of changes to our Death Square Dashboard™, and we need to make sure that `findTurret()` is still a working function. Replace our `expect(true)...` expectation with `expect(typeof(component.findTurret)).toBe('function');`.

14) Check your tests in Chrome one more time. Once they're all passing, we know one more thing is safe from the rebels.

### Resources

- [Angular Testing Guide](https://angular.io/guide/testing)


And you are,

![](https://media.giphy.com/media/l0Iyl55kTeh71nTXy/giphy.gif)




