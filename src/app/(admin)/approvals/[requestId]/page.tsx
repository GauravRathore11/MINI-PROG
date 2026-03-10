"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ApprovalPage() {
  const params = useParams();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data?.user) setCurrentUser(data.user);
      });
  }, []);

  const requestId = Number(params?.requestId);

  if (!requestId) {
    return <p>Invalid request ID</p>;
  }

  if (currentUser?.role === "USER") {
    return <p style={{ padding: 20 }}>Unauthorized: You do not have permission to view or approve requests.</p>;
  }

  async function approve() {
    await fetch("/api/approvals", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        requestId,
        approvedById: 1,
        status: "APPROVED",
      }),
    });

    router.push("/asset-requests");
  }

  async function reject() {
    await fetch("/api/approvals", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        requestId,
        approvedById: 1,
        status: "REJECTED",
      }),
    });

    router.push("/asset-requests");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Asset Request Approval</h1>
      <p>Request ID: {requestId}</p>

      <button onClick={approve} style={{ marginRight: 10 }}>
        Approve
      </button>

      <button onClick={reject}>Reject</button>
    </div>
  );
}