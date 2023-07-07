FROM node:18-alpine AS pnpm-builder

RUN npm install -g pnpm

FROM pnpm-builder AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY .npmrc package.json pnpm-lock.yaml ./
# RUN pnpm fetch --prod
# RUN pnpm install -r --offline --prod
RUN pnpm install --frozen-lockfile

FROM pnpm-builder AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build

FROM pnpm-builder AS runner
WORKDIR /app

ENV NODE_ENV=production \
  PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
