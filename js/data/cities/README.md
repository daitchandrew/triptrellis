## City Data Structure

TripTrellis city data now follows one consistent pattern:

- every city module exports a single `default` object
- that object always looks like:

```js
export default {
  guide,
  supplements,
};
```

- `guide` contains the full hotel/area/core-library data for the city
- `supplements` contains the city-specific extra library layer

## Where Things Live

- city modules:
  `/Users/andrewdaitch/Desktop/Travel Planner/js/data/cities/<city>.js`
- expanded shared supplement layers:
  `/Users/andrewdaitch/Desktop/Travel Planner/js/data/cities/expansions/*.js`
- loader registry:
  `/Users/andrewdaitch/Desktop/Travel Planner/js/data/cities/registry.js`
- standards:
  `/Users/andrewdaitch/Desktop/Travel Planner/js/data/cities/standards.js`

## Canonical Category Labels

Use only these labels:

- `Nature`
- `Food`
- `Cultural Sight`
- `Shopping`
- `Museum`
- `Place to Wander`
- `Nightlife & Entertainment`
- `Amusement & Activities`
- `Other`
- `Wellness`

## Hotel Vibe Guidelines

- keep vibe lines short, sentence-style, and city-specific
- end each line with a period
- make the stay feel distinct in one sentence instead of stacking generic adjectives
- prefer what the base changes:
  - neighborhood mood
  - dining leverage
  - pace
  - access

## Add A New City

1. Create the city module in:
   `/Users/andrewdaitch/Desktop/Travel Planner/js/data/cities/<city>.js`
2. Export a default object with:
   - `guide`
   - `supplements`
3. Add one entry in:
   `/Users/andrewdaitch/Desktop/Travel Planner/js/data/cities/registry.js`
4. Choose the right `expansionRegion`
5. Run:

```bash
npm run build
npm run qa:smoke
```

## Why This Structure Is Better

- one registry instead of repeated loader/meta maps
- one module shape for every city
- one city file per destination
- easier to review, edit, and add destinations without touching multiple code paths
- QA now validates canonical category labels and hotel vibe formatting
