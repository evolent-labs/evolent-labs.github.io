# Client Exports (/skills/Functions/Client)



## getSkillLevel [#getskilllevel]

Gets the current level of one of the player's skills.

```lua
exports.evolent_skills:getSkillLevel(skill)
```

| Parameter | Type     |
| :-------- | :------- |
| `skill`   | `string` |

```lua title="Example"
local skillLevel = exports.evolent_skills:getSkillLevel('driving')
if skillLevel > 10 then
    print('Player is above level 10!')
end
```

## getSkillXp [#getskillxp]

Gets the current XP of one of the player's skills.

```lua
exports.evolent_skills:getSkillXp(skill)
```

| Parameter | Type     |
| :-------- | :------- |
| `skill`   | `string` |

```lua title="Example"
local skillXp = exports.evolent_skills:getSkillXp('shooting')
print(skillXp) -- 182
```

## getAllSkills [#getallskills]

Gets all of the player's skills with their levels and XP.

```lua
exports.evolent_skills:getAllSkills()
```

```lua title="Example"
local skills = exports.evolent_skills:getAllSkills()
for skillName, skillData in pairs(skills) do
    print(skillName, skillData.level, skillData.xp)
end
```
