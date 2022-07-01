---
slug: i-should-have-written-tests
title: I should have written tests
tags: []
---

As a freelancer working (solo mostly) on a number of gigs at the same time, the least interesting to do is to write
tests. That discipline is not worth the investment. It's an MVP, needs to be ready in two or three months.
How does automated tests save me time ⏰?

<!-- truncate -->

This had been an _implicit reasoning_<sup>1</sup> for me in the past. I understood it made sense to write
them, but it takes a lot more hours to author them - when I could use that same time writing the rest of the features.
What I used to do as a compromise is to write tests for a few critical features.

## Functional and OK

Now I designed these few _critical_ tests in a way that if any broke, it could have been caused from many possible
places. I labelled these tests as functional tests. For example, testing the login process, or an item upload, etc.

This is okay. _You can't tell me otherwise_. It's better than no [automated] tests at all. But the issue with
functional tests from my experience is that it's easy to miss edge cases (or simply ignore them and focus
on what should work). In fact, it's messy writing this type of tests because _arranging_ the test takes long lines code.

Worse of all with this approach is that, it doesn't force you to arrange/structure your codebase properly. You have the
freedom to make one function do _20 billion_ different things.

Don't get me wrong. I understand separation of concerns, single responsibility, yiddih yaddah. You can know all these
and still have a terrible codebase. You could _innocently_ assume a logic needs to exist in source `A` but good testing
techniques/discipline will have you extracting relevant code into separate sources.

## UI, test UI?

How do you expect me to write code for that when I'm already clicking around and testing [manually] already? What's
going to take me by surprise? Yes, I also used to think like this.

Another reason I was convicted in not writing UI tests is that I imagined the setup and execution process will 
be overwhelming. Questions like doesn't the test framework have to spawn a browser or an emulator. 
Wouldn't it take a lot of time to run these tests.

Yes I had those questions as a way to confirm my bias. Therefore, I didn't want to bother finding answers.

## What happened?

I launched [Adeton](https://adeton.io).

That's what happened.

✅ Few functional tests.

✅ No UI tests.

The app was good. Worked *fl-*flawless. Few months in, all good; with the few bug fixes I was consistently making.
Until I needed to update the pricing calculation. Until I needed change the shop deployment strategy.
Until I needed to add theming capabilities. Until I needed to add _forgot password_<sup>2</sup>.

What are the guarantees I had not broken another part of the app or the API while working on any of these? You can
guess the answer to that.

> Had I known…


## Units

It was when I joined my current company/workplace ([Varsity Tutors LLC](https://varsitytutors.com)) that I got to 
experience the benefit of unit testing. It is required [over here] to test every single line of code and this was 
made sure by counting code coverage<sup>4</sup>.

I work primarily at the frontend, and we write tests for UI (geeezz 😬). I began to appreciate the effort for writing 
these tests. I spend time writing and testing a feature at a time, knowing well (almost guaranteed) that other 
existing tests will catch any breaking change I make.

The long term benefit is very huge. I don't have to test the whole application by hand to guarantee everything works 
perfectly just because I changed or added a few lines of code.

So around the whole of November and half of December last year, I spent my evenings rearranging and writing unit tests 
for the backend API of Adeton. My confidence level for this codebase has risen tremendously. 
About the frontend, it's still a work-in-progress.

## Changes

If you're in the habit of building building building, it's easy to dismiss automated tests. But software development,
which is a vector of programming and time<sup>3</sup>, requires you to set up your code in a way that anticipates 
change.

One way to guarantee a safe/robust system after changes or upgrades is to put in place best testing practices like 
unit testing (primarily) in combination with other testing methods.

I'm changed. I treat tests as sacred now.

All the best!

---

<small><sup>1</sup> I made this term up to describe a case where the reason you do something hasn't been placed under
logical scrutiny.</small>
<br />
<small><sup>2</sup> Yes Adeton shipped with no "Forgot Password" until about 4-5 months later. Haha. By then we had about
300 users.</small>
<br />
<small><sup>3</sup> I mean software development is a very dynamic process that involves lots of changes with time.
It's not just about programming.</small>
<br />
<small><sup>4</sup> Definitely not manually. We use jest.</small>
