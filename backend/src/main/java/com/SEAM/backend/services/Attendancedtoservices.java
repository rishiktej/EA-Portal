package com.SEAM.backend.services;


import com.SEAM.backend.models.*;
import com.SEAM.backend.repo.*;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class Attendancedtoservices {

    @Autowired
    private Attendancedtorepo userRepository;

    public List<UserEventModel> getUsersWithAttendance() {
        return userRepository.findUsersWithAttendance();
    }

    public void createXL(HttpServletResponse response) throws IOException {
        List<UserEventModel> result = userRepository.findUsersWithAttendance();
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Attendance");

        Row headerRow = sheet.createRow(0);
        String[] headers = {"username","roll_no","branch","clubName","eventName","eventDate","startTime","endTime","eventLocation"};
        for (int i = 0; i < headers.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers[i]);
        }

        int rowNum=1;
        for(UserEventModel item:result){
            Row row = sheet.createRow(rowNum++);
            row.createCell(0).setCellValue(item.getUsername());
            row.createCell(1).setCellValue(item.getRoll_no());
            row.createCell(2).setCellValue(item.getBranch());
            row.createCell(3).setCellValue(item.getClubName());
            row.createCell(4).setCellValue(item.getEventName());
            row.createCell(5).setCellValue(item.getEventDate().toString());
            row.createCell(6).setCellValue(item.getStartTime().toString());
            row.createCell(7).setCellValue(item.getEndTime().toString());
            row.createCell(8).setCellValue(item.getEventLocation());
        }
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment; filename=attendence.xlsx");

        workbook.write(response.getOutputStream());
        workbook.close();
    }
}

