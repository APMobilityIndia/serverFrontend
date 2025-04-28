// src/services/socket.ts
import { io } from "socket.io-client";

let socket: any = null;

export const connectSocket = (token: string) => {
  if (socket) return; // Already connected

  socket = io("http://192.168.1.4:8080", {
    auth: { token },
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log(`✅ Connected to socket: ${socket.id}`);
  });

  socket.on("disconnect", () => {
    console.log("❌ Disconnected from socket");
  });

  socket.on("connect_error", (err: any) => {
    console.error("⚠️ Socket connection error:", err.message);
  });
};

export const onWalletUpdate = (callback: (data: any) => void) => {
  if (!socket) return;
  socket.on("wallet:update", callback);
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log("🛑 Socket disconnected manually");
  }
};

export const getSocket = () => socket;
