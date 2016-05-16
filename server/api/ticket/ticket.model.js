'use strict';

import mongoose from 'mongoose';

var TicketSchema = new mongoose.Schema({
  customerInfo: String,
  comments: String,
  createdBy: String,
  assignedTo: String,
  status: String
});

export default mongoose.model('Ticket', TicketSchema);
