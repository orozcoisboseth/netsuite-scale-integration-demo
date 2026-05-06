
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
### User Event
- Keeps logic minimal
- Only responsible for UI mutation
- Adds a button and links the Client Script

### Client Script
- Reads the current record context
- Redirects to the Suitelet
- No business logic or validation

### Suitelet
- Orchestrates GET and POST requests
- Handles UI rendering
- Delegates all weight logic to the service layer

### Service Layer
- Contains business rules and validations
- Acts as a contract between UI and integrations
- Does not depend on NetSuite UI modules

### Adapter Layer
- Encapsulates external integration logic
- Uses a mock implementation in this repo
- In production, this layer would handle `N/https` calls and authentication

---

###  External Integration (Simulated)

The weighing scale integration is **mocked** on purpose.

- No real hardware communication
- No real API endpoints
- No credentials or headers included
- Adapter pattern allows easy replacement with real API logic

---
## Disclaimer
This repository contains demo code created from scratch.
It does not include configurations, business rules, logic,
or proprietary information from any current or previous employer.
