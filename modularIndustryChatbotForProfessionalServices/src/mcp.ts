
import "dotenv/config";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { executeTool } from "./buildship/execute-tool.js";
import { z } from "zod";

const server = new McpServer({ name: "modularIndustryChatbotForProfessionalServices", version: "1.0.0" });


const transport = new StdioServerTransport();
await server.connect(transport);
