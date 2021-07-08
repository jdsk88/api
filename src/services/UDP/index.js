import socket from 'dgram';

const server = socket.createSocket('udp4');
const udp_server = (host) => {
    server.on('listening', function () {
        var address = server.address();
        console.log('UDP Server listening on ' + address.address + ':' + address.port);
    });

    server.on('message', async (message, remote) => {
        console.log(remote.address + ':' + remote.port + ' - ' + message);
        // const msg = JSON.parse(message);
        console.log(JSON.stringify(message))

    });

    server.bind(process.env.PORT_UDP, host);
}
export default udp_server