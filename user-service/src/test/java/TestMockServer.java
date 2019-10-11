import org.junit.BeforeClass;
import org.mockserver.integration.ClientAndServer;

public class TestMockServer {
    private ClientAndServer mockServer;

    @BeforeClass
    public void startServer() {
        mockServer = ClientAndServer.startClientAndServer(8080);
    }
}
