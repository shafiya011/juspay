import React from "react";
import { Select, Button, DatePicker, Form } from "antd";
import "antd/dist/reset.css";

const { Option } = Select;
const { RangePicker } = DatePicker;

const ExportReport = () => {
  const [form] = Form.useForm();

  const handleExport = (values) => {
    console.log("Export Values:", values);
    // Here you can trigger API call to export report
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <p className="text-center text-gray-600 mb-6">
          Select your required report and timeline then click{" "}
          <b>“Export Report”</b> to generate.
        </p>

        <Form
          form={form}
          layout="vertical"
          initialValues={{
            report: "profile_summary",
            format: "xlsx",
            action: "download",
          }}
          onFinish={handleExport}
        >
          {/* Report Selection */}
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Select Report" name="report" className="mb-4">
              <Select>
                <Option value="profile_summary">Profile Summary Report</Option>
                <Option value="activity_report">Activity Report</Option>
                <Option value="sales_report">Sales Report</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Report Format" name="format" className="mb-4">
              <Select>
                <Option value="xlsx">XLSX</Option>
                <Option value="csv">CSV</Option>
                <Option value="pdf">PDF</Option>
              </Select>
            </Form.Item>
          </div>

          {/* Date Range Picker */}
          <Form.Item
            label="Select Date Range"
            name="dateRange"
            rules={[{ required: true, message: "Please select a date range!" }]}
          >
            <RangePicker className="w-full" />
          </Form.Item>

          {/* Action */}
          <Form.Item label="Action" name="action" className="mb-6">
            <Select>
              <Option value="download">Download</Option>
              <Option value="email">Send to Email</Option>
            </Select>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-blue-600"
            >
              Export Report
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ExportReport;
