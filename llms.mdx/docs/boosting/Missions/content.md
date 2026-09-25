# Custom Missions (/boosting/Missions)



Five missions ship out of the box: three low tier, one mid tier and one high tier.

<Callout>
  Mission classes are indexed by **tier level**: `Missions[1]` is the lowest tier and `Missions[6]` the highest. **The index where you place your mission matters** for difficulty and reward scaling.
</Callout>

## Key concepts [#key-concepts]

* **Data sharing (`contract.data`):** a server side table for data the client needs, for example for location markers or UI updates.
* **Client side definition (`Contracts[data.contractId]`):** holds the client side mission logic and actions, linked to the server side definition by the mission's unique ID.
* **Standard steps:*&#x2A; the wrapper functions &#x2A;*`GetBoostVehicle`*&#x2A; and &#x2A;*`DeliverVehicle`** are recommended as the first and last steps of your mission.
* **Validation:*&#x2A; do every progression and security check against &#x2A;*`contract.leaderId`**.

## Create your own mission step [#create-your-own-mission-step]

<Steps>
  <Step>
    ### Create the server side step [#create-the-server-side-step]

    Create a new file in `server/missions/steps/`, e.g. `test.lua`. This file defines what the step does on the server (validation, required items, ...).

    ```lua title="server/missions/steps/test.lua"
    local missionModule = require('modules.mission')
    local Step = missionModule.Step

    LocateDropOff = Step:new({
        title = "Step 2: Locate the Drop off",
        locations = { -- Optional locations that the client can use
            { x = 123.4, y = 567.8, z = 90.1, radius = 5.0, heading = 180.0 }
        },
        disableGps = true,
        isComplete = function(self, contract)
            -- SERVER VALIDATION FOR COMPLETION (e.g., checking if the item was delivered)
            return true
        end,
        complete = function(self, contract)
            -- EXECUTE SOME ACTION WHEN STEP GETS COMPLETED (e.g., spawning an NPC, or giving a temporary reward)
        end,
        preparation = function(self, contract, location)
            -- THIS GETS EXECUTED ONLY ONCE WHEN THE STEP STARTS (e.g., setting a variable in contract.data)
        end
    })
    ```
  </Step>

  <Step>
    ### Register it in the server steps list [#register-it-in-the-server-steps-list]

    Open `server/missions/main.lua` and add your step to the list.

    ```lua title="server/missions/main.lua"
    local ServerSteps = {
        getBoostVehicle = GetBoostVehicle,
        getBoostVehicleMarked = GetBoostVehicleMarked,
        changeRims = ChangeRims,
        deliverVehicle = DeliverVehicle,
        hackVehicle = HackVehicle,
        neutralizeGang = NeutralizeGang,
        paintVehicle = PaintVehicle,
        signalJammers = SignalJammers,
        tracker = Tracker,
        locateDropOff = LocateDropOff -- [!code ++]
    }
    ```
  </Step>

  <Step>
    ### Create the client side step [#create-the-client-side-step]

    Create a file with the same name in `client/missions/steps/`. It handles the client side of the step, like blips, markers and UI feedback.

    <Callout type="warn">
      The client `preparation` function runs for **every group member**.
    </Callout>

    ```lua title="client/missions/steps/test.lua"
    LocateDropOff = {
        isComplete = function(data)
            -- CODE TO RUN TO CHECK IF THIS STEP IS SUCCESSFULLY COMPLETED
        end,
        onComplete = function (data)
            -- CODE TO RUN WHEN THE CURRENT STEP IS COMPLETED (e.g., removing a marker, entity)
        end,
        preparation = function (data)
            -- CODE TO RUN WHEN THE MISSION STARTS ON THE CLIENT SIDE
        end
    }
    ```
  </Step>

  <Step>
    ### Register it in the client steps list [#register-it-in-the-client-steps-list]

    Open `client/missions/main.lua` and add your step with a label.

    ```lua title="client/missions/main.lua"
    ClientSteps = {
        getBoostVehicle = {
            label = "Get Boost Vehicle",
            step = GetBoostVehicle,
        },
        getBoostVehicleMarked = {
            label = "Get Marked Boost Vehicle",
            step = GetBoostVehicle,
        },
        changeRims = {
            label = "Change Rims",
            step = ChangeRims,
        },
        deliverVehicle = {
            label = "Deliver Vehicle",
            step = DeliverVehicle,
        },
        hackVehicle = {
            label = "Hack Vehicle",
            step = HackVehicle,
        },
        neutralizeGang = {
            label = "Neutralize Gang",
            step = NeutralizeGang,
        },
        paintVehicle = {
            label = "Paint Vehicle",
            step = PaintVehicle,
        },
        signalJammers = {
            label = "Disable Signal Jammers",
            step = SignalJammers,
        },
        tracker = {
            label = "Remove Tracker",
            step = Tracker,
        },
        locateDropOff = { -- [!code ++]
            label = "Locate Drop Off", -- [!code ++]
            step = LocateDropOff -- [!code ++]
        } -- [!code ++]
    }
    ```
  </Step>

  <Step>
    ### Link the step to a mission [#link-the-step-to-a-mission]

    Open the tablet and go to **Admin** > **Missions**. Your new step is listed there, ready to add to a mission.
  </Step>
</Steps>

See [Types](/boosting/Types) for the full `Step`, `Contract` and `StepData` definitions.
