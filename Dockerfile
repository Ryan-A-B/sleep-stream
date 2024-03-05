FROM golang:1.20-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY backend ./backend
COPY internal ./internal
RUN go build -o backend ./backend

FROM alpine:latest
RUN mkdir -p /opt/eventlog && touch /opt/eventlog/events.jsonl
WORKDIR /opt
COPY --from=builder /app/backend/backend backend
CMD [ "./backend" ]