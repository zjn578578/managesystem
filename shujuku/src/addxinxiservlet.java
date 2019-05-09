

import java.io.IOException;
import java.io.PrintWriter;
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
 * Servlet implementation class addxinxiservlet
 */
@WebServlet("/addxinxiservlet")
public class addxinxiservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public addxinxiservlet() {
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
		
		String xinxiid =request.getParameter("xinxiid");
		String xinxiname =request.getParameter("xinxiname");
		String xinximenber =request.getParameter("xinximenber");
		String xinxitype =request.getParameter("xinxitype");
		String xinxiremark =request.getParameter("xinxiremark");
		System.out.println(xinxiname+xinximenber+xinxitype+xinxiremark);
		PrintWriter out=response.getWriter();
		int a = 0;
		try {
			Connection con=sqluntil.getConnection();
			Statement stat=con.createStatement();
			String sql1 = "select id from xinxi order by id DESC limit 0,1";
			ResultSet rs = stat.executeQuery(sql1);
			while(rs.next()) {
				a= rs.getInt("id");
				System.out.println(a);
			}
			String sql2="alter table xinxi auto_increment="+a+"";
			stat.execute(sql2);
			if(xinxiid=="") {
			String sql="insert into xinxi (name,menber,type,remark)values("+xinxiname+",'"+xinximenber+"','"+xinxitype+"','"+xinxiremark+"')";
			stat.execute(sql);
			}
			else {
				String sql="insert into xinxi (id,name,menber,type,remark)values("+xinxiid+",'"+xinxiname+"','"+xinximenber+"','"+xinxitype+"','"+xinxiremark+"')";
				stat.execute(sql);
			}
			con.close();
			String data="1";
			out.print(data);
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

	}


