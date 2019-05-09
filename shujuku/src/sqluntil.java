

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class sqluntil {
	public static Connection getConnection() throws ClassNotFoundException, SQLException {
		String driver = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://localhost:3306/qmm";
		String user = "root";
		String password = "123456";
		Class.forName(driver);
		Connection con = DriverManager.getConnection(url,user,password);
		return con;
		
	}
}
