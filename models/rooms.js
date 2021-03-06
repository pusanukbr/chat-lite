const { Schema, model } = require('mongoose');

const schema = new Schema ({
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  login: [
    {
      userName: {
        type: String,
        require: true,
      },
    }
  ],
  password: {
    type: String,
    required: true,
  },
})

module.exports = model('Rooms', schema)