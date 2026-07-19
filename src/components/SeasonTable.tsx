import type { SeasonRow } from "@/config/liberator-builds";

function groupBuilds(rows: SeasonRow[]) {
  const groups = new Map<string, SeasonRow & { builds: string[] }>();
  for (const row of rows) {
    const key = [row.season, row.operation, row.event, row.version].join("|");
    const group = groups.get(key);
    if (group) group.builds.push(row.build);
    else groups.set(key, { ...row, builds: [row.build] });
  }
  return [...groups.values()];
}

export function SeasonTable({
  rows,
  showEvent,
  showVersion,
}: {
  rows: SeasonRow[];
  showEvent?: boolean;
  showVersion?: boolean;
}) {
  return (
    <div className="mb-5 w-fit max-w-full overflow-x-auto rounded-lg border border-border">
      <table>
        <thead>
          <tr>
            <th>Season</th>
            <th>Operation</th>
            {showEvent ? <th>Event</th> : null}
            {showVersion ? <th>Version</th> : null}
            <th>Build</th>
          </tr>
        </thead>
        <tbody>
          {groupBuilds(rows).map(
            ({ season, operation, event, version, builds }) => (
              <tr key={builds[0]}>
                <td>{season}</td>
                <td>{operation}</td>
                {showEvent ? <td>{event ?? null}</td> : null}
                {showVersion ? <td>{version ?? null}</td> : null}
                <td>
                  <span className="flex flex-col items-center gap-1">
                    {builds.map((build) =>
                      build ? <code key={build}>{build}</code> : null,
                    )}
                  </span>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
