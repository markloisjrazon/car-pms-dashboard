const INTERVAL_LIMIT = 5000;
const WARNING_THRESHOLD = 4500;
const STORAGE_KEY = "apex-pms-fleet-v1";
const EVEREST_ID = "veh-nal-1152";
const BLACK_EVEREST_ID = "veh-tgo-591";
const STRADA_ID = "veh-cal-9475";

const DEFAULT_HISTORY = [
  {
    lastDate: "10/4/2025",
    odo: 179233,
    cycleKm: 5339,
    nextDue: "12/4/2025",
    action: "Completed",
    part: "Delo Gold SAE 15W-40",
  },
  {
    lastDate: "12/10/2025",
    odo: 184572,
    cycleKm: 5339,
    nextDue: "2/10/2026",
    action: "Completed",
    part: "Oil Filter",
  },
  {
    lastDate: "2/18/2026",
    odo: 189903,
    cycleKm: 5331,
    nextDue: "4/18/2026",
    action: "Completed",
    part: "Delo Gold SAE 15W-40",
  },
  {
    lastDate: "4/22/2026",
    odo: 195368,
    cycleKm: 5465,
    nextDue: "6/22/2026",
    action: "Completed",
    part: "Oil Filter",
  },
  {
    lastDate: "6/15/2026",
    odo: 197627,
    cycleKm: 2259,
    nextDue: "8/15/2026",
    action: "Pending",
    part: "Delo Gold SAE 15W-40",
  },
];

const DEFAULT_PARTS = [
  {
    name: "Headlight Assembly 24V F-Series",
    oem: "1-85300193-0",
    alt: "LED LIGHTS",
    spec: "FRR34 Headlight (H4 Type)",
  },
  {
    name: "Delo Gold SAE 15W-40",
    oem: "Engine Oil",
    alt: "—",
    spec: "Recommended for 6HK1 service interval",
  },
  {
    name: "Oil Filter",
    oem: "OEM Filter",
    alt: "—",
    spec: "Replace with every oil change",
  },
];

const EVEREST_HISTORY = [
  {
    lastDate: "9/1/2025",
    odo: 146802,
    cycleKm: 3840,
    nextDue: "1/24/2026",
    action: "Completed",
    part: "OIL FILTER",
  },
  {
    lastDate: "1/24/2026",
    odo: 150642,
    cycleKm: 3840,
    nextDue: "2/24/2026",
    action: "Completed",
    part: "FUEL FILTER",
  },
  {
    lastDate: "2/24/2026",
    odo: 155851,
    cycleKm: 5209,
    nextDue: "6/5/2026",
    action: "Completed",
    part: "AIR FILTER",
  },
  {
    lastDate: "8/25/2026",
    odo: 158869,
    cycleKm: 3018,
    nextDue: "10/25/2026",
    action: "Completed",
    part: "CABIN FILTER",
  },
];

const EVEREST_PARTS = [
  {
    name: "OIL FILTER",
    oem: "FoMoCo BE3G-6744-BA",
    alt: "Genuine ASM Element",
    spec: "VIC O-407A",
  },
  {
    name: "FUEL FILTER",
    oem: "FoMoCo AB39-9176-AC",
    alt: "—",
    spec: "AB39-9176-AC",
  },
  {
    name: "AIR FILTER",
    oem: "EB3G-9601-AA",
    alt: "—",
    spec: "EB3G-9601-AA",
  },
  {
    name: "CABIN FILTER",
    oem: "AB39-19N619-AA",
    alt: "—",
    spec: "AE39-19N613-AA",
  },
  {
    name: "TAIL LIGHT",
    oem: "EB3B-13404BF",
    alt: "EB3B-13404BF - LED TYPE / EB3B-13405AD - BULB",
    spec: "LED or Bulb assembly",
  },
];

const BLACK_EVEREST_HISTORY = [
  {
    lastDate: "8/4/2025",
    odo: 134979,
    cycleKm: 5021,
    nextDue: "1/4/2026",
    action: "Completed",
    part: "OIL FILTER",
  },
  {
    lastDate: "1/5/2026",
    odo: 140000,
    cycleKm: 5021,
    nextDue: "3/31/2026",
    action: "Completed",
    part: "OIL",
  },
];

const BLACK_EVEREST_PARTS = [
  {
    name: "OIL FILTER",
    oem: "Motorcraft AFL-181 (WE01-14-302)",
    alt: "Fleetmax FES5640 for Everest",
    spec: "VIC O-007",
  },
  {
    name: "FUEL FILTER",
    oem: "WLB1-13ZA5",
    alt: "—",
    spec: "VIC FC-159",
  },
  {
    name: "AIR FILTER",
    oem: "—",
    alt: "—",
    spec: "L111901901040 (K1930)",
  },
  {
    name: "TIE ROD END",
    oem: "—",
    alt: "—",
    spec: "—",
  },
  {
    name: "CROSS JOINT",
    oem: "—",
    alt: "—",
    spec: "—",
  },
  {
    name: "FRONT SHOCK ABSORBER",
    oem: "—",
    alt: "—",
    spec: "—",
  },
  {
    name: "OIL",
    oem: "5W-30",
    alt: "5W-30",
    spec: "5W-40",
  },
];

const STRADA_PARTS = [
  {
    name: "OIL FILTER",
    oem: "—",
    alt: "VIC C-312",
    spec: "VIC C-415 · PMS · every 10,000-15,000 km",
  },
  {
    name: "FUEL FILTER",
    oem: "—",
    alt: "VIC F-196A",
    spec: "VIC FC-321 · PMS · Once a year",
  },
  {
    name: "OIL",
    oem: "—",
    alt: "10W-30",
    spec: "10W-40 · PMS · 5,000-7,500 km",
  },
];

const STRADA_HISTORY = [
  {
    lastDate: "8/8/2025",
    odo: 0,
    cycleKm: 0,
    nextDue: "2/8/2026",
    action: "Completed",
    part: "OIL FILTER",
  },
];

function createDefaultVehicle() {
  return {
    id: "veh-cck-5751",
    name: "Isuzu F-Series",
    plate: "CCK 5751",
    model: "2024",
    engine: "6HK1-814133",
    lastServiceOdo: 197627,
    currentOdo: 197627 + 2259,
    lastDate: "6/15/2026",
    nextDue: "8/15/2026",
    actionStatus: "Pending",
    parts: structuredClone(DEFAULT_PARTS),
    history: structuredClone(DEFAULT_HISTORY),
    acknowledgedCritical: false,
    lastNotifiedLevel: "safe",
    hasOdometer: true,
    photo: "assets/isuzu-forward.png",
  };
}

function createEverestVehicle() {
  return {
    id: EVEREST_ID,
    name: "Ford Everest White",
    plate: "NAL 1152",
    model: "2017",
    engine: "EVEREST",
    lastServiceOdo: 155851,
    currentOdo: 158869,
    lastDate: "8/25/2026",
    nextDue: "10/25/2026",
    actionStatus: "Completed",
    parts: structuredClone(EVEREST_PARTS),
    history: structuredClone(EVEREST_HISTORY),
    acknowledgedCritical: false,
    lastNotifiedLevel: "safe",
    hasOdometer: true,
    photo: "",
  };
}

function createBlackEverestVehicle() {
  return {
    id: BLACK_EVEREST_ID,
    name: "Ford Black Everest",
    plate: "TGO 591",
    model: "2012",
    engine: "EVEREST BLACK",
    lastServiceOdo: 129958,
    currentOdo: 134979,
    lastDate: "8/4/2025",
    nextDue: "1/4/2026",
    actionStatus: "Completed",
    parts: structuredClone(BLACK_EVEREST_PARTS),
    history: structuredClone(BLACK_EVEREST_HISTORY),
    acknowledgedCritical: false,
    lastNotifiedLevel: "safe",
    hasOdometer: true,
    photo: "",
  };
}

function createStradaVehicle() {
  return {
    id: STRADA_ID,
    name: "Mitsubishi Strada",
    plate: "CAL 9475",
    model: "2018",
    engine: "STRADA",
    lastServiceOdo: 0,
    currentOdo: 0,
    lastDate: "8/8/2025",
    nextDue: "2/8/2026",
    actionStatus: "Pending",
    parts: structuredClone(STRADA_PARTS),
    history: structuredClone(STRADA_HISTORY),
    acknowledgedCritical: false,
    lastNotifiedLevel: "safe",
    hasOdometer: false,
    photo: "",
  };
}

function createDefaultFleet() {
  const primary = createDefaultVehicle();
  const everest = createEverestVehicle();
  const blackEverest = createBlackEverestVehicle();
  const strada = createStradaVehicle();
  return {
    activeVehicleId: primary.id,
    vehicles: [primary, everest, blackEverest, strada],
  };
}

function createEmptyVehicle() {
  return {
    id: `veh-${Date.now()}`,
    name: "",
    plate: "",
    model: "",
    engine: "",
    lastServiceOdo: 0,
    currentOdo: 0,
    lastDate: "",
    nextDue: "",
    actionStatus: "Pending",
    parts: [{ name: "", oem: "", alt: "", spec: "" }],
    history: [],
    acknowledgedCritical: false,
    lastNotifiedLevel: "safe",
    hasOdometer: true,
    photo: "",
  };
}

function vehicleLabel(vehicle) {
  const name = vehicle.name?.trim();
  const plate = vehicle.plate?.trim() || "Unnamed";
  return name ? `${name} · ${plate}` : plate;
}

function ensureSeedVehicles(storeData) {
  const seeds = [
    { id: EVEREST_ID, create: createEverestVehicle },
    { id: BLACK_EVEREST_ID, create: createBlackEverestVehicle },
    { id: STRADA_ID, create: createStradaVehicle },
  ];

  seeds.forEach((seed) => {
    const exists = storeData.vehicles.some((v) => v.id === seed.id);
    if (!exists) {
      storeData.vehicles.push(seed.create());
      storeData._didMigrate = true;
    }
  });

  storeData.vehicles = storeData.vehicles.map((v) => ({
    ...v,
    name: v.name || "",
    photo: v.photo || (v.id === "veh-cck-5751" ? "assets/isuzu-forward.png" : ""),
  }));
  return storeData;
}

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createDefaultFleet();
    }
    const parsed = JSON.parse(raw);
    if (!parsed?.vehicles?.length) {
      return createDefaultFleet();
    }
    return ensureSeedVehicles(parsed);
  } catch {
    return createDefaultFleet();
  }
}

function saveStore() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    notify(
      "SAVE ERROR",
      "Could not save fleet data. Photo may be too large — try a smaller PNG/SVG.",
      "crit"
    );
  }
}

const store = loadStore();
if (store._didMigrate) {
  delete store._didMigrate;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    /* ignore */
  }
}
let adminEditingId = "new";
let gaugeInitialized = false;
let pendingPhotoData = null;
let photoCleared = false;
let vehicleRotateDeg = 0;

const els = {
  clock: document.getElementById("live-clock"),
  vehicleSelect: document.getElementById("vehicle-select"),
  vehicleMeta: document.getElementById("vehicle-meta"),
  gaugeKm: document.getElementById("gauge-km"),
  gaugeProgress: document.getElementById("gauge-progress"),
  gaugeNeedle: document.getElementById("gauge-needle"),
  gaugeTrack: document.getElementById("gauge-track"),
  gaugeTicks: document.getElementById("gauge-ticks"),
  statusPill: document.getElementById("status-pill"),
  odoDisplay: document.getElementById("odo-display"),
  odoProgress: document.getElementById("odo-progress"),
  remainDisplay: document.getElementById("remain-display"),
  remainProgress: document.getElementById("remain-progress"),
  lastDate: document.getElementById("last-date"),
  nextDue: document.getElementById("next-due"),
  totalMileage: document.getElementById("total-mileage"),
  actionStatus: document.getElementById("action-status"),
  partsList: document.getElementById("parts-list"),
  scheduleBody: document.getElementById("schedule-body"),
  alertBanner: document.getElementById("alert-banner"),
  alertTitle: document.getElementById("alert-title"),
  alertBody: document.getElementById("alert-body"),
  toastStack: document.getElementById("toast-stack"),
  btnSim: document.getElementById("btn-sim-drive"),
  btnReset: document.getElementById("btn-reset-cycle"),
  btnAck: document.getElementById("btn-ack-alert"),
  btnAdminToggle: document.getElementById("btn-admin-toggle"),
  btnThemeDark: document.getElementById("btn-theme-dark"),
  btnThemeLight: document.getElementById("btn-theme-light"),
  vehicleStage: document.getElementById("vehicle-stage"),
  vehicleTurntable: document.getElementById("vehicle-turntable"),
  vehiclePhoto: document.getElementById("vehicle-photo"),
  vehiclePlaceholder: document.getElementById("vehicle-placeholder"),
  inputPhoto: document.getElementById("input-photo"),
  adminPhotoPreview: document.getElementById("admin-photo-preview"),
  photoHint: document.getElementById("photo-hint"),
  btnClearPhoto: document.getElementById("btn-clear-photo"),
  adminPanel: document.getElementById("admin-panel"),
  adminForm: document.getElementById("admin-form"),
  adminVehicleSelect: document.getElementById("admin-vehicle-select"),
  inputPlate: document.getElementById("input-plate"),
  inputName: document.getElementById("input-name"),
  inputModel: document.getElementById("input-model"),
  inputEngine: document.getElementById("input-engine"),
  inputAction: document.getElementById("input-action"),
  inputCurrentOdo: document.getElementById("input-current-odo"),
  inputLastOdo: document.getElementById("input-last-odo"),
  inputLastDate: document.getElementById("input-last-date"),
  inputNextDue: document.getElementById("input-next-due"),
  adminCycleHint: document.getElementById("admin-cycle-hint"),
  materialsEditor: document.getElementById("materials-editor"),
  btnAddMaterial: document.getElementById("btn-add-material"),
  btnNewVehicle: document.getElementById("btn-new-vehicle"),
  btnDeleteVehicle: document.getElementById("btn-delete-vehicle"),
};

function getActiveVehicle() {
  const found = store.vehicles.find((v) => v.id === store.activeVehicleId);
  return found || store.vehicles[0];
}

function polar(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polar(cx, cy, r, endAngle);
  const end = polar(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

function getCycleKm(vehicle) {
  return Math.max(0, Number(vehicle.currentOdo) - Number(vehicle.lastServiceOdo));
}

function getStatus(cycleKm) {
  if (cycleKm >= INTERVAL_LIMIT) return "crit";
  if (cycleKm >= WARNING_THRESHOLD) return "warn";
  return "safe";
}

function statusLabel(level) {
  if (level === "crit") return "CRITICAL";
  if (level === "warn") return "WARNING";
  return "SAFE";
}

function formatNumber(n) {
  return Math.round(Number(n) || 0).toLocaleString("en-US");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function initGauge() {
  if (gaugeInitialized) return;
  const start = -120;
  const end = 120;
  els.gaugeTrack.setAttribute("d", describeArc(140, 140, 112, start, end));

  for (let i = 0; i <= 10; i += 1) {
    const angle = start + ((end - start) * i) / 10;
    const outer = polar(140, 140, 100, angle);
    const inner = polar(140, 140, i % 5 === 0 ? 86 : 92, angle);
    const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
    tick.setAttribute("class", "tick");
    tick.setAttribute("x1", String(inner.x));
    tick.setAttribute("y1", String(inner.y));
    tick.setAttribute("x2", String(outer.x));
    tick.setAttribute("y2", String(outer.y));
    els.gaugeTicks.appendChild(tick);
  }
  gaugeInitialized = true;
}

function updateGauge(cycleKm, vehicle) {
  if (vehicle && vehicle.hasOdometer === false) {
    els.gaugeProgress.setAttribute("d", describeArc(140, 140, 112, -120, -120));
    els.gaugeNeedle.style.transform = "rotate(-120deg)";
    els.gaugeKm.textContent = "N/A";
    els.gaugeProgress.setAttribute("stroke", "url(#arcSafe)");
    els.statusPill.textContent = "NO ODO";
    els.statusPill.className = "status-pill";
    return;
  }

  const clamped = Math.min(cycleKm, INTERVAL_LIMIT);
  const ratio = clamped / INTERVAL_LIMIT;
  const start = -120;
  const end = -120 + 240 * ratio;
  const level = getStatus(cycleKm);

  els.gaugeProgress.setAttribute("d", describeArc(140, 140, 112, start, end));
  els.gaugeNeedle.style.transform = `rotate(${-120 + 240 * ratio}deg)`;
  els.gaugeKm.textContent = formatNumber(cycleKm);

  if (level === "crit") {
    els.gaugeProgress.setAttribute("stroke", "url(#arcCrit)");
  } else if (level === "warn") {
    els.gaugeProgress.setAttribute("stroke", "url(#arcWarn)");
  } else {
    els.gaugeProgress.setAttribute("stroke", "url(#arcSafe)");
  }

  els.statusPill.textContent = statusLabel(level);
  els.statusPill.className = `status-pill ${level === "safe" ? "" : level}`.trim();
}

function updateMiniGauges(vehicle, cycleKm) {
  const circumference = 2 * Math.PI * 58;

  if (vehicle.hasOdometer === false) {
    els.odoDisplay.textContent = "N/A";
    els.remainDisplay.textContent = "N/A";
    els.odoProgress.style.strokeDasharray = String(circumference);
    els.odoProgress.style.strokeDashoffset = String(circumference);
    els.remainProgress.style.strokeDasharray = String(circumference);
    els.remainProgress.style.strokeDashoffset = String(circumference);
    return;
  }

  const remain = Math.max(0, INTERVAL_LIMIT - cycleKm);
  const odoRatio = Math.min(cycleKm / INTERVAL_LIMIT, 1);
  const remainRatio = remain / INTERVAL_LIMIT;

  els.odoDisplay.textContent = formatNumber(vehicle.currentOdo);
  els.remainDisplay.textContent = formatNumber(remain);

  els.odoProgress.style.strokeDasharray = String(circumference);
  els.odoProgress.style.strokeDashoffset = String(circumference * (1 - odoRatio));
  els.odoProgress.style.stroke =
    cycleKm >= INTERVAL_LIMIT
      ? "#ff2d4b"
      : cycleKm >= WARNING_THRESHOLD
        ? "#ff9f1a"
        : "#ff4d3a";

  els.remainProgress.style.strokeDasharray = String(circumference);
  els.remainProgress.style.strokeDashoffset = String(
    circumference * (1 - remainRatio)
  );
  els.remainProgress.style.stroke =
    remain <= 0 ? "#ff2d4b" : remain <= 500 ? "#ff9f1a" : "#3dd68c";
}

function updateHeader(vehicle) {
  els.vehicleMeta.textContent = `${vehicle.name ? `${vehicle.name} · ` : ""}${vehicle.model || "—"} · ${vehicle.engine || "—"}`;
  document.title = `APEX PMS — ${vehicle.name || vehicle.plate || "Fleet"}`;
}

function updateVehiclePhoto(vehicle) {
  const photo = vehicle.photo || "";
  if (photo) {
    els.vehiclePhoto.hidden = false;
    els.vehiclePlaceholder.hidden = true;
    els.vehiclePhoto.src = photo;
    els.vehiclePhoto.alt = `${vehicleLabel(vehicle)} preview`;
  } else {
    els.vehiclePhoto.hidden = true;
    els.vehiclePlaceholder.hidden = false;
    els.vehiclePhoto.removeAttribute("src");
    els.vehiclePhoto.alt = "No vehicle photo";
  }
  vehicleRotateDeg = 0;
  els.vehicleTurntable.style.transform = "rotateY(0deg)";
  els.vehicleStage.classList.remove("is-rotating", "is-spinning");
}

function setAdminPhotoPreview(photo) {
  if (photo) {
    els.adminPhotoPreview.hidden = false;
    els.adminPhotoPreview.src = photo;
    els.photoHint.textContent = "Photo ready. Save vehicle to apply on dashboard.";
  } else {
    els.adminPhotoPreview.hidden = true;
    els.adminPhotoPreview.removeAttribute("src");
    els.photoHint.textContent = "PNG or SVG recommended. Click dashboard photo to rotate.";
  }
}

function readPhotoFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }
    const allowed = ["image/png", "image/svg+xml", "image/jpeg", "image/webp"];
    if (!allowed.includes(file.type)) {
      reject(new Error("Use PNG, SVG, JPG, or WEBP."));
      return;
    }
    if (file.size > 2.5 * 1024 * 1024) {
      reject(new Error("Image must be under 2.5 MB."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read image file."));
    reader.readAsDataURL(file);
  });
}

function updateTelemetry(vehicle, cycleKm) {
  els.lastDate.textContent = vehicle.lastDate || "—";
  els.nextDue.textContent = vehicle.nextDue || "—";
  els.totalMileage.textContent =
    vehicle.hasOdometer === false ? "No odo data" : `${formatNumber(cycleKm)} KM`;
  els.actionStatus.value = vehicle.actionStatus || "Pending";
}

function updateAlert(vehicle, cycleKm) {
  if (vehicle.hasOdometer === false) {
    els.alertBanner.hidden = false;
    els.alertTitle.textContent = "Odometer Not Recorded";
    els.alertBody.textContent =
      "This vehicle has no odometer reading yet. Track PMS by date/schedule, or enter KM in Admin Panel to enable interval alerts.";
    return;
  }

  const level = getStatus(cycleKm);
  const oilPart =
    vehicle.parts.find((p) => /oil/i.test(p.name))?.name || "engine oil";

  if (level === "crit" && !vehicle.acknowledgedCritical) {
    els.alertBanner.hidden = false;
    els.alertTitle.textContent = "Engine Oil Change Required";
    els.alertBody.textContent = `Odometer cycle has reached 5,000 km for ${vehicle.plate}. Replace ${oilPart} and related filters now.`;
  } else if (level === "warn") {
    els.alertBanner.hidden = false;
    els.alertTitle.textContent = "Approaching Oil Change Interval";
    els.alertBody.textContent = `Cycle mileage is ${formatNumber(cycleKm)} km (nearly 5,000). Status: Warning — prepare PMS materials.`;
  } else {
    els.alertBanner.hidden = true;
  }

  if (level !== vehicle.lastNotifiedLevel) {
    if (level === "warn") {
      notify(
        "WARNING",
        `${vehicle.plate}: nearly 5,000 km (${formatNumber(cycleKm)} km). Oil change upcoming.`,
        "warn"
      );
    } else if (level === "crit") {
      notify(
        "CRITICAL ALERT",
        `${vehicle.plate}: 5,000 km interval hit. Engine oil change required.`,
        "crit"
      );
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("APEX PMS — Oil Change Required", {
          body: `${vehicle.plate}: 5,000 km service interval reached.`,
        });
      }
    } else if (level === "safe" && vehicle.lastNotifiedLevel !== "safe") {
      notify("SAFE", `${vehicle.plate}: oil service interval reset.`, "safe");
    }
    vehicle.lastNotifiedLevel = level;
    saveStore();
  }
}

function notify(title, message, tone) {
  const toast = document.createElement("div");
  toast.className = `toast ${tone === "safe" ? "" : tone}`.trim();
  toast.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span>`;
  els.toastStack.prepend(toast);
  window.setTimeout(() => toast.remove(), 5200);
}

function renderVehicleSelects() {
  const options = store.vehicles
    .map(
      (v) =>
        `<option value="${escapeHtml(v.id)}">${escapeHtml(vehicleLabel(v))}</option>`
    )
    .join("");

  els.vehicleSelect.innerHTML = options;
  els.vehicleSelect.value = store.activeVehicleId;

  els.adminVehicleSelect.innerHTML =
    `<option value="new">+ Add New Vehicle</option>${options}`;
  els.adminVehicleSelect.value = adminEditingId;
}

function renderParts(vehicle) {
  if (!vehicle.parts.length) {
    els.partsList.innerHTML =
      '<li><span class="part-meta">No materials saved. Add them in Admin Panel.</span></li>';
    return;
  }

  els.partsList.innerHTML = vehicle.parts
    .map(
      (part) => `
      <li>
        <span class="part-name">${escapeHtml(part.name || "Unnamed part")}</span>
        <span class="part-meta">OEM: ${escapeHtml(part.oem || "—")} · Alt: ${escapeHtml(part.alt || "—")}</span>
        <span class="part-meta">${escapeHtml(part.spec || "")}</span>
      </li>
    `
    )
    .join("");
}

function renderHistory(vehicle) {
  const noOdo = vehicle.hasOdometer === false;
  const liveCycle = getCycleKm(vehicle);
  const liveLevel = noOdo ? "safe" : getStatus(liveCycle);
  const primaryPart = vehicle.parts[0]?.name || "PMS Material";
  const rows = [
    {
      lastDate: vehicle.lastDate || "—",
      odo: vehicle.currentOdo,
      cycleKm: liveCycle,
      nextDue: vehicle.nextDue || "—",
      action: vehicle.actionStatus,
      part: primaryPart,
      live: true,
      level: liveLevel,
    },
    ...(vehicle.history || [])
      .slice()
      .reverse()
      .map((row) => ({
        ...row,
        live: false,
        level: noOdo ? "safe" : getStatus(row.cycleKm),
      })),
  ];

  els.scheduleBody.innerHTML = rows
    .map((row) => {
      const badgeClass = noOdo ? "safe" : row.level === "safe" ? "safe" : "warn";
      const label = noOdo ? "NO ODO" : row.level === "safe" ? "SAFE" : "WARNING";
      const odoText = noOdo ? "N/A" : formatNumber(row.odo);
      const cycleText = noOdo ? "N/A" : formatNumber(row.cycleKm);
      return `
        <tr>
          <td>${escapeHtml(row.lastDate)}${row.live ? " · LIVE" : ""}</td>
          <td>${odoText}</td>
          <td>${cycleText}</td>
          <td>${escapeHtml(row.nextDue)}</td>
          <td><span class="badge ${badgeClass}">${label}</span></td>
          <td>${escapeHtml(row.action)}</td>
          <td>${escapeHtml(row.part)}</td>
        </tr>
      `;
    })
    .join("");
}

function updateAdminCycleHint() {
  const current = Number(els.inputCurrentOdo.value) || 0;
  const last = Number(els.inputLastOdo.value) || 0;
  const cycle = Math.max(0, current - last);
  const level = getStatus(cycle);
  els.adminCycleHint.textContent = `Cycle mileage: ${formatNumber(cycle)} KM · Status preview: ${statusLabel(level)}`;
}

function renderMaterialsEditor(parts) {
  const list = parts?.length ? parts : [{ name: "", oem: "", alt: "", spec: "" }];
  els.materialsEditor.innerHTML = list
    .map(
      (part, index) => `
      <div class="material-row" data-index="${index}">
        <label class="field">
          <span>Part Name</span>
          <input type="text" data-field="name" value="${escapeHtml(part.name)}" placeholder="e.g. Delo Gold SAE 15W-40" />
        </label>
        <label class="field">
          <span>Part No. / OEM</span>
          <input type="text" data-field="oem" value="${escapeHtml(part.oem)}" placeholder="e.g. 1-85300193-0" />
        </label>
        <label class="field">
          <span>Alternative Parts</span>
          <input type="text" data-field="alt" value="${escapeHtml(part.alt)}" placeholder="e.g. LED LIGHTS" />
        </label>
        <label class="field">
          <span>Recommended Spec</span>
          <input type="text" data-field="spec" value="${escapeHtml(part.spec)}" placeholder="e.g. FRR34 Headlight (H4 Type)" />
        </label>
        <button type="button" class="btn ghost compact btn-remove-material" data-index="${index}">
          Remove
        </button>
      </div>
    `
    )
    .join("");
}

function readMaterialsFromEditor() {
  return Array.from(els.materialsEditor.querySelectorAll(".material-row")).map(
    (row) => ({
      name: row.querySelector('[data-field="name"]').value.trim(),
      oem: row.querySelector('[data-field="oem"]').value.trim(),
      alt: row.querySelector('[data-field="alt"]').value.trim(),
      spec: row.querySelector('[data-field="spec"]').value.trim(),
    })
  );
}

function toDateInputValue(value) {
  if (!value || !String(value).trim()) return "";
  const raw = String(value).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return "";

  const year = parsed.getFullYear();
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function fromDateInputValue(value) {
  if (!value || !String(value).trim()) return "";
  const raw = String(value).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;

  const [year, month, day] = raw.split("-").map(Number);
  const parsed = new Date(year, month - 1, day);
  if (Number.isNaN(parsed.getTime())) return raw;
  return parsed.toLocaleDateString("en-US");
}

function fillAdminForm(vehicleId) {
  adminEditingId = vehicleId;
  pendingPhotoData = null;
  photoCleared = false;
  if (els.inputPhoto) els.inputPhoto.value = "";

  if (vehicleId === "new") {
    els.inputName.value = "";
    els.inputPlate.value = "";
    els.inputModel.value = "";
    els.inputEngine.value = "";
    els.inputAction.value = "Pending";
    els.inputCurrentOdo.value = "";
    els.inputLastOdo.value = "";
    els.inputLastDate.value = "";
    els.inputNextDue.value = "";
    renderMaterialsEditor([{ name: "", oem: "", alt: "", spec: "" }]);
    setAdminPhotoPreview("");
    updateAdminCycleHint();
    els.adminVehicleSelect.value = "new";
    return;
  }

  const vehicle = store.vehicles.find((v) => v.id === vehicleId);
  if (!vehicle) {
    fillAdminForm("new");
    return;
  }

  els.inputName.value = vehicle.name || "";
  els.inputPlate.value = vehicle.plate || "";
  els.inputModel.value = vehicle.model || "";
  els.inputEngine.value = vehicle.engine || "";
  els.inputAction.value = vehicle.actionStatus || "Pending";
  els.inputCurrentOdo.value =
    vehicle.currentOdo === 0 || vehicle.currentOdo ? String(vehicle.currentOdo) : "";
  els.inputLastOdo.value =
    vehicle.lastServiceOdo === 0 || vehicle.lastServiceOdo
      ? String(vehicle.lastServiceOdo)
      : "";
  els.inputLastDate.value = toDateInputValue(vehicle.lastDate);
  els.inputNextDue.value = toDateInputValue(vehicle.nextDue);
  renderMaterialsEditor(vehicle.parts?.length ? vehicle.parts : [{ name: "", oem: "", alt: "", spec: "" }]);
  setAdminPhotoPreview(vehicle.photo || "");
  updateAdminCycleHint();
  els.adminVehicleSelect.value = vehicle.id;
}

function collectAdminForm() {
  const currentRaw = els.inputCurrentOdo.value.trim();
  const lastRaw = els.inputLastOdo.value.trim();
  const currentOdo = currentRaw === "" ? 0 : Number(currentRaw);
  const lastServiceOdo = lastRaw === "" ? 0 : Number(lastRaw);

  return {
    name: els.inputName.value.trim(),
    plate: els.inputPlate.value.trim(),
    model: els.inputModel.value.trim(),
    engine: els.inputEngine.value.trim(),
    currentOdo: Number.isFinite(currentOdo) ? Math.max(0, currentOdo) : 0,
    lastServiceOdo: Number.isFinite(lastServiceOdo) ? Math.max(0, lastServiceOdo) : 0,
    lastDate: fromDateInputValue(els.inputLastDate.value),
    nextDue: fromDateInputValue(els.inputNextDue.value),
    actionStatus: els.inputAction.value || "Pending",
    materials: readMaterialsFromEditor(),
  };
}

function saveAdminVehicle(event) {
  event.preventDefault();
  const data = collectAdminForm();

  const isNew = adminEditingId === "new";
  let vehicle;

  if (isNew) {
    vehicle = createEmptyVehicle();
    vehicle.history = [];
    store.vehicles.push(vehicle);
  } else {
    vehicle = store.vehicles.find((v) => v.id === adminEditingId);
    if (!vehicle) {
      vehicle = createEmptyVehicle();
      store.vehicles.push(vehicle);
    }
  }

  vehicle.name = data.name;
  vehicle.plate = data.plate;
  vehicle.model = data.model;
  vehicle.engine = data.engine;
  vehicle.currentOdo = data.currentOdo;
  vehicle.lastServiceOdo = data.lastServiceOdo;
  vehicle.lastDate = data.lastDate;
  vehicle.nextDue = data.nextDue;
  vehicle.actionStatus = data.actionStatus;
  vehicle.parts = data.materials;
  vehicle.hasOdometer = data.currentOdo > 0 || data.lastServiceOdo > 0;
  vehicle.acknowledgedCritical = false;

  if (photoCleared) {
    vehicle.photo = "";
  } else if (pendingPhotoData) {
    vehicle.photo = pendingPhotoData;
  } else if (typeof vehicle.photo !== "string") {
    vehicle.photo = "";
  }

  store.activeVehicleId = vehicle.id;
  adminEditingId = vehicle.id;
  saveStore();
  renderVehicleSelects();
  fillAdminForm(vehicle.id);
  refresh();
  notify("SAVED", `${vehicleLabel(vehicle)} saved to fleet admin board.`, "safe");
}

function deleteAdminVehicle() {
  if (adminEditingId === "new") {
    notify("DELETE", "No saved vehicle selected.", "warn");
    return;
  }

  if (store.vehicles.length <= 1) {
    notify("DELETE", "Keep at least one vehicle in the fleet.", "warn");
    return;
  }

  const target = store.vehicles.find((v) => v.id === adminEditingId);
  if (!target) return;

  const confirmed = window.confirm(`Delete vehicle ${target.plate}?`);
  if (!confirmed) return;

  store.vehicles = store.vehicles.filter((v) => v.id !== adminEditingId);
  store.activeVehicleId = store.vehicles[0].id;
  adminEditingId = "new";
  saveStore();
  renderVehicleSelects();
  fillAdminForm("new");
  refresh();
  notify("DELETED", `${vehicleLabel(target)} removed from fleet.`, "warn");
}

function refresh() {
  const vehicle = getActiveVehicle();
  if (!vehicle) return;

  store.activeVehicleId = vehicle.id;
  const cycleKm = getCycleKm(vehicle);
  updateHeader(vehicle);
  updateVehiclePhoto(vehicle);
  updateGauge(cycleKm, vehicle);
  updateMiniGauges(vehicle, cycleKm);
  updateTelemetry(vehicle, cycleKm);
  updateAlert(vehicle, cycleKm);
  renderParts(vehicle);
  renderHistory(vehicle);
  renderVehicleSelects();
  els.btnSim.disabled = vehicle.hasOdometer === false;
  els.btnReset.disabled = vehicle.hasOdometer === false;
}

function tickClock() {
  const now = new Date();
  els.clock.textContent = now.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function requestNotifyPermission() {
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().catch(() => undefined);
  }
}

els.vehicleSelect.addEventListener("change", () => {
  store.activeVehicleId = els.vehicleSelect.value;
  const vehicle = getActiveVehicle();
  vehicle.lastNotifiedLevel = getStatus(getCycleKm(vehicle));
  saveStore();
  refresh();
});

els.btnSim.addEventListener("click", () => {
  const vehicle = getActiveVehicle();
  if (vehicle.hasOdometer === false) {
    notify("NO ODO", "Add odometer KM in Admin Panel before simulating drive.", "warn");
    return;
  }
  vehicle.currentOdo += 250;
  vehicle.acknowledgedCritical = false;
  if (vehicle.actionStatus === "Completed") {
    vehicle.actionStatus = "Pending";
  }
  saveStore();
  refresh();
  if (adminEditingId === vehicle.id) {
    fillAdminForm(vehicle.id);
  }
});

els.btnReset.addEventListener("click", () => {
  const vehicle = getActiveVehicle();
  if (vehicle.hasOdometer === false) {
    notify("NO ODO", "Add odometer KM in Admin Panel before resetting the oil cycle.", "warn");
    return;
  }
  vehicle.lastServiceOdo = vehicle.currentOdo;
  vehicle.lastDate = new Date().toLocaleDateString("en-US");
  const next = new Date();
  next.setMonth(next.getMonth() + 2);
  vehicle.nextDue = next.toLocaleDateString("en-US");
  vehicle.actionStatus = "Completed";
  vehicle.acknowledgedCritical = false;
  vehicle.lastNotifiedLevel = "crit";
  saveStore();
  refresh();
  if (adminEditingId === vehicle.id) {
    fillAdminForm(vehicle.id);
  }
});

els.btnAck.addEventListener("click", () => {
  const vehicle = getActiveVehicle();
  vehicle.acknowledgedCritical = true;
  saveStore();
  els.alertBanner.hidden = true;
});

els.actionStatus.addEventListener("change", () => {
  const vehicle = getActiveVehicle();
  vehicle.actionStatus = els.actionStatus.value;
  saveStore();
  renderHistory(vehicle);
  if (adminEditingId === vehicle.id) {
    els.inputAction.value = vehicle.actionStatus;
  }
});

const THEME_KEY = "apex-pms-theme";

function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function applyTheme(theme) {
  const next = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  document.body.classList.toggle("theme-light", next === "light");
  document.body.classList.toggle("theme-dark", next === "dark");
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    /* ignore */
  }
  els.btnThemeDark.setAttribute("aria-pressed", String(next === "dark"));
  els.btnThemeLight.setAttribute("aria-pressed", String(next === "light"));
}

els.btnThemeDark.addEventListener("click", () => applyTheme("dark"));
els.btnThemeLight.addEventListener("click", () => applyTheme("light"));

els.vehicleStage.addEventListener("click", () => {
  vehicleRotateDeg = (vehicleRotateDeg + 180) % 3600;
  els.vehicleTurntable.style.transform = `rotateY(${vehicleRotateDeg}deg) scale(1.03)`;
  window.setTimeout(() => {
    els.vehicleTurntable.style.transform = `rotateY(${vehicleRotateDeg}deg) scale(1)`;
  }, 280);
});

els.inputPhoto.addEventListener("change", async () => {
  const file = els.inputPhoto.files?.[0];
  if (!file) return;
  try {
    const dataUrl = await readPhotoFile(file);
    pendingPhotoData = dataUrl;
    photoCleared = false;
    setAdminPhotoPreview(dataUrl);
    notify("PHOTO", "Image loaded. Click Save Vehicle to apply.", "safe");
  } catch (error) {
    pendingPhotoData = null;
    els.inputPhoto.value = "";
    notify("PHOTO", error.message || "Could not load image.", "warn");
  }
});

els.btnClearPhoto.addEventListener("click", () => {
  pendingPhotoData = null;
  photoCleared = true;
  els.inputPhoto.value = "";
  setAdminPhotoPreview("");
  notify("PHOTO", "Photo cleared. Save vehicle to remove it from dashboard.", "warn");
});

els.btnAdminToggle.addEventListener("click", () => {
  const opening = els.adminPanel.hidden;
  els.adminPanel.hidden = !opening;
  els.btnAdminToggle.textContent = opening ? "Close Admin" : "Admin Panel";
  if (opening) {
    fillAdminForm(store.activeVehicleId);
    els.adminPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

els.adminVehicleSelect.addEventListener("change", () => {
  fillAdminForm(els.adminVehicleSelect.value);
});

els.btnAddMaterial.addEventListener("click", () => {
  const materials = readMaterialsFromEditor();
  materials.push({ name: "", oem: "", alt: "", spec: "" });
  renderMaterialsEditor(materials);
});

els.materialsEditor.addEventListener("click", (event) => {
  const button = event.target.closest(".btn-remove-material");
  if (!button) return;
  const materials = readMaterialsFromEditor();
  const index = Number(button.dataset.index);
  materials.splice(index, 1);
  renderMaterialsEditor(materials.length ? materials : [{ name: "", oem: "", alt: "", spec: "" }]);
});

els.inputCurrentOdo.addEventListener("input", updateAdminCycleHint);
els.inputLastOdo.addEventListener("input", updateAdminCycleHint);

els.adminForm.addEventListener("submit", saveAdminVehicle);
els.btnNewVehicle.addEventListener("click", () => fillAdminForm("new"));
els.btnDeleteVehicle.addEventListener("click", deleteAdminVehicle);

initGauge();
applyTheme(getTheme());
tickClock();
window.setInterval(tickClock, 1000);
refresh();
requestNotifyPermission();
