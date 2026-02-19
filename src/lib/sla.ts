import { Ticket } from "@prisma/client";

export default function slaCheck(ticket: Ticket): boolean {
  const creationTime = ticket.createdAt;
  const now = new Date();
  
  const durationInHours = (now.getTime() - creationTime.getTime()) / (1000 * 60 * 60);
  
  const limit = ticket.slaHours;
  
  return durationInHours <= limit;
}