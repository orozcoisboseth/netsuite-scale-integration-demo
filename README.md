
# SuiteScript Scale Integration Demo

Personal project created to demonstrate architecture,
patterns, and best practices in SuiteScript 2.x through
a simulated integration with weighing devices.

## Purpose
- Demonstrate how to structure an external integration in NetSuite
- Clean separation of responsibilities (adapters, services, scripts)
- Error handling, validation, and logging patterns

## Scope
- The scale device is simulated (mock)
- No real hardware communication
- No real NetSuite internalIds
- No production business logic

## Tech Stack
- SuiteScript 2.x
- User Event Scripts
- Scheduled Scripts
- Shared libraries

## Planned Structure

src/
 ├─ sch/
 ├─ ue/
 ├─ services/
 ├─ adapters/
 ├─ lib/
 └─ mock/
