{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type SuccessState = {
    result: 'success';
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      return {
        //result: 'success',
        result: 'fail',
        reason: 'offline',
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) { }

    login(): ResultState {
      return this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) { }
    run() {
      const status = this.userService.login();
      if (status.result === 'success') {
        console.log(`login() success!!!`);
      }
      // 에러 처리
      else /* if (status.result === 'fail') */ {
        if (status.reason === 'offline') {
          console.log(`offline Error!!!`);
        } else if (status.reason === 'down') {
          console.log(`down Error!!!`);
        } else /* if (status.reason === 'timeout') */ {
          console.log(`timeout Error!!!`);
        }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
