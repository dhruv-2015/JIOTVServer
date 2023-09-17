import "dotenv/config";

function getCallerInfo() {
  const originalPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = (_, stack) => stack;
  const err = new Error();
  Error.captureStackTrace(err, getCallerInfo);

  const callSite = err.stack[2]; // Index 2 refers to the caller's caller (wrapper)

  if (callSite) {
    return {
      filename: callSite.getFileName(),
      lineNumber: callSite.getLineNumber(),
      methodName: callSite.getFunctionName() || "anonymous",
    };
  } else {
    return {
      filename: "Unknown",
      lineNumber: -1,
      methodName: "unknown",
    };
  }
}

export default function jdebug(...args) {
  const isDebug = process.env.DHRUV_JTV_DEBUG === "true";
  if (isDebug) {
    const callerInfo = getCallerInfo();
    console.log(
      `[DEBUG] ${callerInfo.filename}:${callerInfo.lineNumber} (${callerInfo.methodName}):`,
      ...args
    );
  }
}
