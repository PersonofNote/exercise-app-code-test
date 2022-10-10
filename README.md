# Exercise App Code Project

## Installation/setup
git clone repo, run npm install, run npm start


## Requirements

Build a SPA app in React that tracks daily exercises and fitness

Requirements

The implementation should meet the following requirements

Functional

Allow a user to track a type of exercise for a particular duration
Examples of types of exercise: walk, jog, lift weights, jumping jacks, push-ups
Do not persist this data. This data will be pulled from random number API (see below).
Allow a user to enter a daily/weekly/monthly/yearly goal for a type of exercise
Persist data to method of choice: local storage, in-memory data structure, or back-end data store.
Display a dashboard showing
A chart view component (pick one) of exercises completed. This should be filterable by date. Use random number API (see below).
A component (build one) showing the progress towards goal. This should be filterable by goal. Use persisted state.
Technical

Pull random numbers from a REST API to populate “tracked” exercises in minutes. Randomly assign each minutes number to an exercise type for display in dashboard.
Example: www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=5
Use functional components and react hooks for state management
Demonstrate conditional rendering of components
Use at least one shared component in multiple places
Stretch goals

Add unit test coverage
