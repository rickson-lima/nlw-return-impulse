import { SubmitFeedbackService } from "./submit-feedback.service";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {
  const submitFeedback = new SubmitFeedbackService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Example comment",
        screenshot: "data:image/png;base64test.png",
      })
    ).resolves.not.toThrowError();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Example comment",
        screenshot: "data:image/png;base64test.png",
      })
    ).rejects.toThrowError();
  });

  it("should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64test.png",
      })
    ).rejects.toThrowError();
  });

  it("should not be able to submit a feedback with invalid screenshot format", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Example comment",
        screenshot: "data:",
      })
    ).rejects.toThrowError();
  });
});
