"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initParseRuntime(converter) {
    var params = converter.parseParam;
    var rtn = {
        needProcessIgnoreColumn: false,
        needProcessIncludeColumn: false,
        selectedColumns: undefined,
        ended: false,
        hasError: false,
        error: undefined,
        delimiter: converter.parseParam.delimiter,
        eol: converter.parseParam.eol,
        columnConv: [],
        headerType: [],
        headerTitle: [],
        headerFlag: [],
        headers: undefined,
        started: false,
        parsedLineNumber: 0,
        columnValueSetter: [],
    };
    if (params.ignoreColumns) {
        rtn.needProcessIgnoreColumn = true;
    }
    if (params.includeColumns) {
        rtn.needProcessIncludeColumn = true;
    }
    return rtn;
}
exports.initParseRuntime = initParseRuntime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9QYXJzZVJ1bnRpbWUudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9reGlhbmcvd29yay9wcm9qZWN0cy9jc3YyanNvbi9zcmMvUGFyc2VSdW50aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBOERBLDBCQUFpQyxTQUFvQjtJQUNuRCxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO0lBQ3BDLElBQU0sR0FBRyxHQUFpQjtRQUN4Qix1QkFBdUIsRUFBRSxLQUFLO1FBQzlCLHdCQUF3QixFQUFFLEtBQUs7UUFDL0IsZUFBZSxFQUFFLFNBQVM7UUFDMUIsS0FBSyxFQUFFLEtBQUs7UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVM7UUFDekMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRztRQUM3QixVQUFVLEVBQUUsRUFBRTtRQUNkLFVBQVUsRUFBRSxFQUFFO1FBQ2QsV0FBVyxFQUFFLEVBQUU7UUFDZixVQUFVLEVBQUUsRUFBRTtRQUNkLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixpQkFBaUIsRUFBRSxFQUFFO0tBQ3RCLENBQUE7SUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7UUFDeEIsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztLQUNwQztJQUNELElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtRQUN6QixHQUFHLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO0tBQ3JDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBM0JELDRDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTVlBhcnNlUGFyYW0sIENlbGxQYXJzZXIgfSBmcm9tIFwiLi9QYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBDb252ZXJ0ZXIsIFByZVJhd0RhdGFDYWxsYmFjaywgUHJlRmlsZUxpbmVDYWxsYmFjayB9IGZyb20gXCIuL0NvbnZlcnRlclwiO1xuaW1wb3J0IHsgQ2hpbGRQcm9jZXNzIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcbmltcG9ydCBDU1ZFcnJvciBmcm9tIFwiLi9DU1ZFcnJvclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlUnVudGltZSB7XG4gIC8qKlxuICAgKiBJZiBuZWVkIGNvbnZlcnQgaWdub3JlQ29sdW1uIGZyb20gY29sdW1uIG5hbWUoc3RyaW5nKSB0byBjb2x1bW4gaW5kZXggKG51bWJlcikuIFBhcnNlciBuZWVkcyBjb2x1bW4gaW5kZXguXG4gICAqL1xuICBuZWVkUHJvY2Vzc0lnbm9yZUNvbHVtbjogYm9vbGVhbjtcbiAgLyoqXG4gICAqIElmIG5lZWQgY29udmVydCBpbmNsdWRlQ29sdW1uIGZyb20gY29sdW1uIG5hbWUoc3RyaW5nKSB0byBjb2x1bW4gaW5kZXggKG51bWJlcikuIFBhcnNlciBuZWVkcyBjb2x1bW4gaW5kZXguXG4gICAqL1xuICBuZWVkUHJvY2Vzc0luY2x1ZGVDb2x1bW46IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0aGUgaW5kZXhlcyBvZiBjb2x1bW5zIHRvIHJlc2VydmUsIHVuZGVmaW5lZCBtZWFucyByZXNlcnZlIGFsbCwgW10gbWVhbnMgaGlkZSBhbGxcbiAgICovXG4gIHNlbGVjdGVkQ29sdW1ucz86IG51bWJlcltdO1xuICBlbmRlZDogYm9vbGVhbjtcbiAgaGFzRXJyb3I6IGJvb2xlYW47XG4gIGVycm9yPzogRXJyb3I7XG4gIC8qKlxuICAgKiBJbmZlcnJlZCBkZWxpbWl0ZXJcbiAgICovXG4gIGRlbGltaXRlcjogc3RyaW5nIHwgc3RyaW5nW107XG4gIC8qKlxuICAgKiBJbmZlcnJlZCBlb2xcbiAgICovXG4gIGVvbD86IHN0cmluZztcbiAgLyoqXG4gICAqIENvbnZlcnRlciBmdW5jdGlvbiBmb3IgYSBjb2x1bW4uIFBvcHVsYXRlZCBhdCBydW50aW1lLlxuICAgKi9cbiAgY29sdW1uQ29udjogKENlbGxQYXJzZXIgfCBudWxsKVtdLFxuICBoZWFkZXJUeXBlOiBhbnlbXSxcbiAgaGVhZGVyVGl0bGU6IHN0cmluZ1tdLFxuICBoZWFkZXJGbGFnOiBhbnlbXSxcbiAgLyoqXG4gICAqIEluZmVycmVkIGhlYWRlcnNcbiAgICovXG4gIGhlYWRlcnM/OiBhbnlbXSxcbiAgY3N2TGluZUJ1ZmZlcj86IEJ1ZmZlcixcbiAgXG4gIC8qKlxuICAgKiBhZnRlciBmaXJzdCBjaHVuayBvZiBkYXRhIGJlaW5nIHByb2Nlc3NlZCBhbmQgZW1pdHRlZCwgc3RhcnRlZCB3aWxsIGJlY29tZSB0cnVlLlxuICAgKi9cbiAgc3RhcnRlZDogYm9vbGVhbixcbiAgcHJlUmF3RGF0YUhvb2s/OiBQcmVSYXdEYXRhQ2FsbGJhY2ssXG4gIHByZUZpbGVMaW5lSG9vaz86IFByZUZpbGVMaW5lQ2FsbGJhY2ssXG4gIHBhcnNlZExpbmVOdW1iZXI6IG51bWJlcixcblxuICBjb2x1bW5WYWx1ZVNldHRlcjogRnVuY3Rpb25bXTtcbiAgc3Vic2NyaWJlPzoge1xuICAgIG9uTmV4dD86IChkYXRhOiBhbnksIGxpbmVOdW1iZXI6bnVtYmVyKSA9PiB2b2lkIHwgUHJvbWlzZUxpa2U8dm9pZD47XG4gICAgb25FcnJvcj86IChlcnI6IENTVkVycm9yKSA9PiB2b2lkO1xuICAgIG9uQ29tcGxldGVkPzogKCkgPT4gdm9pZDtcbiAgfTtcbiAgdGhlbj86IHtcbiAgICBvbmZ1bGZpbGxlZDogKHZhbHVlOiBhbnlbXSkgPT4gYW55O1xuICAgIG9ucmVqZWN0ZWQ6IChlcnI6IEVycm9yKSA9PiBhbnk7XG4gIH1cblxufVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRQYXJzZVJ1bnRpbWUoY29udmVydGVyOiBDb252ZXJ0ZXIpOiBQYXJzZVJ1bnRpbWUge1xuICBjb25zdCBwYXJhbXMgPSBjb252ZXJ0ZXIucGFyc2VQYXJhbTtcbiAgY29uc3QgcnRuOiBQYXJzZVJ1bnRpbWUgPSB7XG4gICAgbmVlZFByb2Nlc3NJZ25vcmVDb2x1bW46IGZhbHNlLFxuICAgIG5lZWRQcm9jZXNzSW5jbHVkZUNvbHVtbjogZmFsc2UsXG4gICAgc2VsZWN0ZWRDb2x1bW5zOiB1bmRlZmluZWQsXG4gICAgZW5kZWQ6IGZhbHNlLFxuICAgIGhhc0Vycm9yOiBmYWxzZSxcbiAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgIGRlbGltaXRlcjogY29udmVydGVyLnBhcnNlUGFyYW0uZGVsaW1pdGVyLFxuICAgIGVvbDogY29udmVydGVyLnBhcnNlUGFyYW0uZW9sLFxuICAgIGNvbHVtbkNvbnY6IFtdLFxuICAgIGhlYWRlclR5cGU6IFtdLFxuICAgIGhlYWRlclRpdGxlOiBbXSxcbiAgICBoZWFkZXJGbGFnOiBbXSxcbiAgICBoZWFkZXJzOiB1bmRlZmluZWQsXG4gICAgc3RhcnRlZDogZmFsc2UsXG4gICAgcGFyc2VkTGluZU51bWJlcjogMCxcbiAgICBjb2x1bW5WYWx1ZVNldHRlcjogW10sXG4gIH1cbiAgaWYgKHBhcmFtcy5pZ25vcmVDb2x1bW5zKSB7XG4gICAgcnRuLm5lZWRQcm9jZXNzSWdub3JlQ29sdW1uID0gdHJ1ZTtcbiAgfVxuICBpZiAocGFyYW1zLmluY2x1ZGVDb2x1bW5zKSB7XG4gICAgcnRuLm5lZWRQcm9jZXNzSW5jbHVkZUNvbHVtbiA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHJ0bjtcbn0iXX0=