import socket

def check_ping(host):
    try:
        socket.gethostbyname(host, )
        return True
    except socket.error:
        return False

if __name__ == '__main__':
    print(check_ping('ec2-44-202-209-143.compute-1.amazonaws.com'))
