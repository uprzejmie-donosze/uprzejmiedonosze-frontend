import React, { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import FormNew from "../components/report/FormNew";
import FormConfirm from "../components/report/FormConfirm";
import { FormBreadcrumbs } from "../components/report/components/Breadcrumbs";
import { useAppDispatch, useAppSelector } from "../store";
import { createReport, getOrCreateReport } from "../store/report";
import { LinearLoader } from "../components/Loader";
import { withAuth } from "../config";

const STAGES = {
  new: "new",
  confirm: "confirm",
  success: "success",
};

const BREADCRUMBS = [
  { name: "formularz", value: STAGES.new },
  { name: "podsumowanie", value: STAGES.confirm },
  { name: "potwierdzenie", value: STAGES.success },
];

const NEW_FORM_ID = "app-id";

function ReportPage() {
  const dispatch = useAppDispatch();
  const [stage, setStage] = useState(STAGES.new);
  const [value, setValue] = useLocalStorage<string>(NEW_FORM_ID);

  const { loaded, loading } = useAppSelector((state) => state.report.app);

  useEffect(() => {
    if (loaded) return;
    if (!!value) {
      dispatch(getOrCreateReport(value, registerNewReport));
      return;
    }
    registerNewReport();
  }, []);

  function registerNewReport() {
    dispatch(createReport(setValue));
  }

  function handleNext() {
    switch (stage) {
      case STAGES.new:
        setStage(STAGES.confirm);
        return;
      case STAGES.confirm:
        setStage(STAGES.success);
        return;
      default:
        return;
    }
  }

  function handlePrev() {
    switch (stage) {
      case STAGES.success:
        setStage(STAGES.confirm);
        return;
      case STAGES.confirm:
        setStage(STAGES.new);
        return;
      default:
        return;
    }
  }

  if (loading) {
    return <LinearLoader />;
  }

  if (!loaded) {
    return <p>Problem z załadowaniem formularza.</p>;
  }

  return (
    <section>
      <FormBreadcrumbs active={stage} items={BREADCRUMBS} />

      {stage === STAGES.new && (
        <FormNew create={handleNext} newReport={registerNewReport} />
      )}
      {stage === STAGES.confirm && (
        <FormConfirm back={handlePrev} next={handleNext} />
      )}
      {stage === STAGES.success && <div>success</div>}
    </section>
  );
}

export const Report = withAuth(ReportPage);
