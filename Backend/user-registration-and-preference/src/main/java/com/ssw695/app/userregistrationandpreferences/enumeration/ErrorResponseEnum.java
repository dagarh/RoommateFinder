package com.ssw695.app.userregistrationandpreferences.enumeration;

/**
 * @author Himanshu Dagar
 *
 */
public enum ErrorResponseEnum {

	DATABASE_ISSUE_FOUND("DATABASE_ISSUE_FOUND", "Database issue is found"),
	MISSING_USER_ID("MISSING_USER_ID", "User id can't be zero"),
	MISSING_BOTH_FIELDS("MISSING_BOTH_FIELDS", "Atleast one field must be present");

	private final String responseCode;
	private final String responseMessage;

	/**
	 * @param responseCode
	 * @param responseMessage
	 */
	private ErrorResponseEnum(String responseCode, String responseMessage) {
		this.responseCode = responseCode;
		this.responseMessage = responseMessage;
	}

	/**
	 * @return the responseCode
	 */
	public String getErrorCode() {
		return this.responseCode;
	}

	/**
	 * @return the responseMessage
	 */
	public String getErrorMessage() {
		return this.responseMessage;
	}

}
