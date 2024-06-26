interface HostConnectionStateConnected {
    state: 'connected';
    request_id: string;
    since: moment.Moment;
}

interface HostConnectionStateDisconnected {
    state: 'disconnected';
    since: moment.Moment;
}

type HostConnectionState = HostConnectionStateConnected | HostConnectionStateDisconnected;

interface Session {
    id: string;
    name: string
    host_connection_id: string;
    started_at: moment.Moment;
    host_connection_state: HostConnectionState;
}

interface SessionListService extends EventTarget {
    get_session_list: () => List<Session>;
}
