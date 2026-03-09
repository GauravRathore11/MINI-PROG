// ─── Dashboard Types ────────────────────────────────────────────────────────

export type TicketStatus = "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
export type Priority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type Role = "EMPLOYEE" | "AGENT" | "ADMIN";
export type ApprovalStatus = "PENDING" | "APPROVED" | "REJECTED" | "ESCALATED";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: Priority;
  category: string;
  createdById: number;
  assignedToId: number | null;
  slaDeadline: Date;
  slaHours: number;
  resolvedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface TicketDetail extends Ticket {
  createdBy: {
    id: number;
    name: string;
    email: string;
    department?: string;
  };
  assignedTo: {
    id: number;
    name: string;
    email: string;
  } | null;
  comments: TicketComment[];
}

export interface TicketComment {
  id: number;
  content: string;
  message?: string;
  ticketId: number;
  authorId: number;
  isInternal: boolean;
  createdAt: Date;
  author: {
    id: number;
    name: string;
    role: Role;
  };
}

export interface Approval {
  id: string;
  title: string;
  requestedBy: string;
  approver: string;
  status: ApprovalStatus;
  type: string;
  createdAt: Date;
  dueDate: Date;
  notes?: string;
}

export interface DashboardStats {
  totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
  pendingApprovals: number;
  criticalTickets: number;
  approvalRate: number;
  avgResolutionTime: number; // in hours
  ticketTrend: number; // percentage change
}

export interface ActivityItem {
  id: string;
  type: "ticket_created" | "ticket_updated" | "approval_requested" | "approval_resolved" | "comment_added";
  title: string;
  user: string;
  timestamp: Date;
  entityId: string;
  entityType: "ticket" | "approval";
}

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

