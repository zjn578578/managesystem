

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class addmenberservlet
 */
@WebServlet("/addmenberservlet")
public class addmenberservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public addmenberservlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String mid =request.getParameter("mid");
		String mname =request.getParameter("mname");
		String mposition =request.getParameter("mposition");
		String meducation =request.getParameter("meducation");
		String mskill =request.getParameter("mskill");
		System.out.println(mname+mposition+meducation+mskill);
		int a=0;
		try {
			Connection con=sqluntil.getConnection();
			Statement stat=con.createStatement();
			
			String sql1 = "select mid from menber order by mid DESC limit 0,1";
			ResultSet rs = stat.executeQuery(sql1);
			while(rs.next()) {
				a= rs.getInt("mid");
				System.out.println(a);
			}
			String sql2="alter table menber auto_increment="+a+"";
			stat.execute(sql2);
			if(mid=="") {
			String sql="insert into menber (mname,mposition,meducation,mskill) values('"+mname+"','"+mposition+"','"+meducation+"','"+mskill+"')";
			stat.execute(sql);
			}
			
			else {
				String sql="insert into menber (mid,mname,mposition,meducation,mskill) values("+mid+",'"+mname+"','"+mposition+"','"+meducation+"','"+mskill+"')";
				stat.execute(sql);
			}
			
			response.getWriter().println(1);
			con.close();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
}

