$.response.contentType = "text/html";
var output;
var conn = $.db.getConnection();
var pstmt = conn.prepareStatement('SELECT count(*) as cnt FROM "DEMO_PROJECT.DEMO_DB.Tables::DEMO_TABLE"');
var rs = pstmt.executeQuery();
if (!rs.next()) {
    $.response.setBody( "Failed to retrieve data" );
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}
else {
	output="Count of records from hdbtable is ";
	output=output + rs.getString(1);
}


rs.close();
pstmt.close();
conn.close();
$.response.setBody(output);