This is a *really* experimental feature that's definitely a bad idea. It's a bit of a hack. Ok, it's *several* bits of a
hack, but, hey, it Works On My Machine(tm). :)

It allows you to patch the system's compendiums to update or delete items in them. Permanently.

It runs every time the system is ready (i.e. with every refresh), so it'll keep patching compendiums until you disable
it.

To get rid of the changes it has made, disable the feature and reinstall pf2e. (Permanent change, remember?)

It is *not* supported. At all. If anything breaks due to this, you get the keep all the pieces...

Oh, and *do* TAKE A BACKUP before trying this. (Or, better yet, don't try it.)

To use it, enter a json array like the following example in the text field in the settings, do *not* add extra newlines.

There is very little error handling. If you type the uuid wrong it just doesn't update anything (or the wrong thing,
depending on what mistake you made). It *might* complain about bad json and delete what you entered. Or it might brick
your world. You *did* take a backup, right?

The name and reason fields are optional and are not read by the patcher, they exist so you can document what the uuid
points to. (Actually, you can enter whatever fields you want other than "action", "uuid" and "data". Schemas? Bah. We don't need no stinking schemas...)

The array must start with a json that unlocks the compendium, then any number of jsons that update or delete entries, and
finally a json that locks the compendium.

You can change any number of compendiums, but you must unlock and lock each compendium individually.

The example below is, not coincidentally, the relevant bits of my current houserules. :)

```json array
[
  {
    "action": "unlock",
    "uuid": "Compendium.pf2e.equipment-srd.YBKhjWqFuvgkArba"
  },
  {
    "action": "unlock",
    "uuid": "Compendium.pf2e.feats-srd.Item.aFygWxgSv82WyCsl"
  },
  {
    "action": "unlock",
    "uuid": "Compendium.pf2e.spells-srd.Item.TCk2MDwf5L5OYjFC"
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.YBKhjWqFuvgkArba",
    "name": "Cassisian Helmet",
    "reason": "Too good, no reason to not buy one. And, I suspect it'll go away/be changed a lot in the remaster.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.7dkdtY9cTXM3gMon",
    "name": "Phantasmal Doorknob (Greater)",
    "reason": "Dazzled is fine, Blinded? Not so much.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.9BXiGLvOFxDBmQrQ",
    "name": "Phantasmal Doorknob (Major)",
    "reason": "Dazzled is fine, Blinded? Not so much.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.feats-srd.Item.aFygWxgSv82WyCsl",
    "name": "Acrobat Dedication",
    "reason": "It's beginning to irritate me.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.feats-srd.Item.49mBVNF4SK6iYdJm",
    "name": "Unconventional Weaponry",
    "reason": "Do humans that don't use flickmaces even exist?",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.XaHXxSpSCgLGYhbs",
    "name": "Imp Shot",
    "reason": "Flatfooted and a penalty for most/all of a combat? At level 5? Nope.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.T7o5nMvWS8YeJOst",
    "name": "Black Tendril Shot (Lesser)",
    "reason": "Multi-round Slow is just boring. And too easy to get with this.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.16INAWEN5mkuGTga",
    "name": "Black Tendril Shot (Moderate)",
    "reason": "Multi-round Slow is just boring. And too easy to get with this.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.NOPrIz6UNxof1M5d",
    "name": "Black Tendril Shot (Greater)",
    "reason": "Multi-round Slow is just boring. And too easy to get with this.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.0Tu55QMhTXAijFvl",
    "name": "Saurian Spike (Major)",
    "reason": "Precise scent is annoying.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.spells-srd.Item.TCk2MDwf5L5OYjFC",
    "name": "Cloak of Colors",
    "reason": "Actually not sure about this one. Leaving it in for now.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.feats-srd.Item.y2XeMe1F18lIyo59",
    "name": "Blind-Fight",
    "reason": "Adds pf2e-perception support to Blind-Fight as per https://github.com/reonZ/pf2e-perception/wiki/Roll-Options#blind-fight",
    "data": {
      "system.rules": [
        {
          "key": "RollOption",
          "domain": "all",
          "option": "self:pf2perception:visibility:noff-self:all"
        },
        {
          "key": "RollOption",
          "domain": "all",
          "option": "self:pf2perception:concealed:dc:0"
        },
        {
          "key": "RollOption",
          "domain": "all",
          "option": "self:pf2perception:hidden:dc:5"
        }
      ]
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.feats-srd.Item.CkK7WwaWnrLXK9sW",
    "name": "Methodical Debilitations",
    "reason": "Adds pf2e-perception support to Methodical Deliberations as per https://github.com/reonZ/pf2e-perception/wiki/Roll-Options#methodical-debilitations",
    "data": {
      "system.rules": [
        {
          "key": "Note",
          "predicate": [
            "target:condition:flat-footed"
          ],
          "selector": "strike-damage",
          "text": "<span class='pf2-icon'>f</span> @UUID[Compendium.pf2e.feats-srd.Item.Methodical Debilitations]"
        },
        {
          "key": "RollOption",
          "domain": "all",
          "option": "self:pf2perception:lesser:dc-self:0"
        },
        {
          "key": "RollOption",
          "domain": "all",
          "option": "self:pf2perception:standard:dc-self:0"
        },
        {
          "key": "RollOption",
          "domain": "all",
          "option": "self:pf2perception:greater:dc-self:2"
        },
        {
          "key": "RollOption",
          "domain": "all",
          "option": "self:pf2perception:greater-prone:dc-self:2"
        }
      ]
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.fZxI5GkBFfAUUf1z",
    "name": "Wrecker",
    "reason": "Common combination weapon? Nope.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.oW9neeVcpHjEvjcN",
    "name": "Mikazuki",
    "reason": "Common combination weapon? Nope.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.cSGWhw4Wn6Z98tVK",
    "name": "Lancer",
    "reason": "Common combination weapon? Nope.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.KaYvuSNXZaOammij",
    "name": "Crescent Cross",
    "reason": "Common combination weapon? Nope.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "update",
    "uuid": "Compendium.pf2e.equipment-srd.Item.K9ndlHU5JRHj0ivP",
    "name": "Bow Staff",
    "reason": "Common combination weapon? Nope.",
    "data": {
      "system.traits.rarity": "uncommon"
    }
  },
  {
    "action": "lock",
    "uuid": "Compendium.pf2e.equipment-srd.YBKhjWqFuvgkArba"
  },
  {
    "action": "lock",
    "uuid": "Compendium.pf2e.feats-srd.Item.aFygWxgSv82WyCsl"
  },
  {
    "action": "lock",
    "uuid": "Compendium.pf2e.spells-srd.Item.TCk2MDwf5L5OYjFC"
  }
]
```

The available actions are:

* `unlock`: Unlock the compendium for editing. It takes the uuid of a compendium entry to unlock a compendium, it
  doesn't matter what entry.
* `update`: Update the compendium entry with the given data. It takes a uuid of a compendium entry to update and the
  data to update it with.
* `delete`: Delete the compendium entry. It takes a uuid of a compendium entry to delete.
* `lock`: Lock the compendium if it is unlocked. It takes the uuid of a compendium entry to unlock a compendium, it
  doesn't matter what entry.

Build uiids by opening the compendium, right-clicking on the entry, and copying the uuid from the url.

Build the data for the update action by looking at the json for a compendium entry and copying the data you want to
change.