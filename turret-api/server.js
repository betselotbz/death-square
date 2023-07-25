const express = require('express');
const app = express();
const cors = require('cors');
const allTurrets = [
   {
      turretNumber: 1,
      damage: 2
   },
   {
      turretNumber: 2,
      damage: 0
   },
   {
      turretNumber: 3,
      damage: 8
   },
   {
      turretNumber: 4,
      damage: 6
   },
   {
      turretNumber: 5,
      damage: 4
   },
   {
      turretNumber: 6,
      damage: 2
   },
   {
      turretNumber: 7,
      damage: 0
   },
   {
      turretNumber: 8,
      damage: 1
   },
   {
      turretNumber: 9,
      damage: 2
   },
   {
      turretNumber: 10,
      damage: 3
   },
      {
      turretNumber: 11,
      damage: 4
   },
   {
      turretNumber: 12,
      damage: 5
   },
   {
      turretNumber: 13,
      damage: 6
   },
   {
      turretNumber: 14,
      damage: 7
   },
   {
      turretNumber: 15,
      damage: 8
   },
   {
      turretNumber: 16,
      damage: 9
   }
];
app.use(cors());
app.get('/', function(req, res) {
   res.send("Did you mean to go to /api/turrets/:id?");
});
app.get('/api/turrets', function(req, res) {
   res.json(allTurrets);
})
app.get('/api/turrets/:id', function(req, res) {
   const turret = allTurrets.find(t => {
      return t.turretNumber == req.params.id
   })
   res.json(turret);
});
app.listen(process.env.PORT || 3000);
